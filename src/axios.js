import { baseURL } from "./Constants";
import axios from "axios";
 const instance = axios.create({
    baseURL: baseURL,
  });
  export default instance;