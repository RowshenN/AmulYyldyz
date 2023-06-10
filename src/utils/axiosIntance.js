import axios from "axios";
import { token } from "./token";

// const BASE_URL = "http://localhost:8181/";
const BASE_URL2 = "https://www.tm-textile.org/api/";
const BASE_URL = "https://www.tm-textile.org/";
// const BASE_URL2 = "http://116.203.238.7:8181/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000000,

  headers: {
    //  Authorization: 'Bearer ' + token(),
    "Content-Type": "application/json",
    Accept: "*/*",
    // Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6IktlcmltIiwiaWF0IjoxNjE2NDUwNjU3fQ.v8iyHYmwNlKVhLUA7LzxybICB8zzbVjRyXeFZbV7IPw'
  },
});
export { BASE_URL, BASE_URL2, axiosInstance };
