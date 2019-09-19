import axios from "axios";
import {
  MessageBox,
  Message
} from "element-ui";
import store from "@/store";
import {
  getToken
} from "@/utils/auth";
import path from "path";
import {
  BASE_API,
  TIMEOUT
} from "@/config";

// create an axios instance
const service = axios.create({
  baseURL: BASE_API // api 的 base_url
  // timeout: TIMEOUT // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    
    config.url = path.join("/antispam-end/api", config.url);
    
    // Do something before request is sent
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers["token"] = getToken();
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (
      res.code != 0 &&
      !response.headers["content-type"].startsWith("application/vnd.ms-excel")
    ) {
      if (parseInt(res.code) === 401) {
        handle401()
      } else {
        Message.error(res.msg)
      }
      return Promise.reject(res);
    } else {
      if(response.headers["content-type"].startsWith("application/vnd.ms-excel")){
        return response
      }
      return res;
    }
  },
  error => {
    if (error.response.status === 401) {
      handle401()
    }
    return Promise.reject(error);
  }
);

function handle401() {
  MessageBox.confirm(
    "你已被登出，可以取消继续留在该页面，或者重新登录",
    "确定登出", {
      confirmButtonText: "重新登录",
      cancelButtonText: "取消",
      type: "warning"
    }
  ).then(() => {
    store.dispatch("FedLogOut").then(() => {
      location.reload(); // 为了重新实例化vue-router对象 避免bug
    });
  });
}
export default service;