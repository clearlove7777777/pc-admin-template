// const baseUrl = "http://10.2.4.61:8080/mock/620/";
const baseUrl = "";

export const BASE_API = process.env.NODE_ENV === "development" ? process.env.BASE_API : baseUrl;

// export const TIMEOUT = 5000;
