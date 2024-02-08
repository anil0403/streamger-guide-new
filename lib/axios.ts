import axios from "axios";

export const IP = "http://192.168.1.73:8000";
// export const CONTENT_URL = "http://192.168.1.73:8000/guide_app/v1"; // local
export const CONTENT_URL = "http://65.2.83.181:8002/guide_app/v1"; // cloud
export const SERVICE_URL = "http://192.168.1.73:8000/api/v1";
export const USER_URL = "http://192.168.1.73:3000/api/v1";

export default axios.create({
  baseURL: USER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const userAuth = axios.create({
  baseURL: USER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const contentAuth = axios.create({
  baseURL: CONTENT_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const serviceAuth = axios.create({
  baseURL: SERVICE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// export const useAuth = axios.create({
//   baseURL: "",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
