import axios from "axios";
import { token } from "./token";

// const BASE_URL = "http://localhost:8181/";
const BASE_URL = "http://192.168.100.27:8181/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,

  headers: {
    //  Authorization: 'Bearer ' + token(),
    "Content-Type": "application/json",
    Accept: "*/*",
    // Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6IktlcmltIiwiaWF0IjoxNjE2NDUwNjU3fQ.v8iyHYmwNlKVhLUA7LzxybICB8zzbVjRyXeFZbV7IPw'
  },
});
export { BASE_URL, axiosInstance };
