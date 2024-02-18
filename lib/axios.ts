import { cookies } from "next/headers";
import axios from "axios";
export const IP = "http://192.168.1.73:8000";
export const CONTENT_URL_Content = "http://192.168.1.73:8000/guide_app/v1";
export const CONTENT_URL_Resource = "http://192.168.1.73:8000/api/v1";
export const USER_URL = "http://192.168.1.73:3000/api/v1";

export const userAuth = axios.create({
  baseURL: USER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// export const serviceAuth = axios.create({
//   baseURL: SERVICE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const ResourceAuth = axios.create({
  baseURL: CONTENT_URL_Resource,
  headers: {
    "Content-Type": "application/json",
  },
});

export const contentAuth = axios.create({
  baseURL: CONTENT_URL_Content,
  headers: {
    "Content-Type": "application/json",
  },
});

const contentAuthInstance = axios.create({
  baseURL: CONTENT_URL_Content,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
contentAuthInstance.interceptors.request.use(
  async (config) => {
    if (!config.headers["Authorization"]) {
      config.headers[
        "Authorization"
      ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwODg0OTA2NiwiaWF0IjoxNzA4MjQ0MjY2LCJqdGkiOiIzZTQ3NDk2NzE1ZDU0YjVmODU4Mjg5MDc3Njk5ZWRlYSIsInVzZXJfaWQiOjQ1LCJ1c2VyIjoiZ3VpZGUiLCJuYW1lIjoiQW5pbCBTaHJlc3RoYSJ9.0tUgT4cmEKwZcNvvdjmMjozm3TFdyOIIemgWdPeZ5x0`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// End of Request interceptor

// Response interceptor
contentAuthInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response;
  },
  (error) => {
    // Handle response errors here

    return Promise.reject(error);
  }
);
// End of Response interceptor

export default contentAuthInstance;
