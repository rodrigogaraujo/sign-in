import axios from "axios";

const api = axios.create({
  baseURL: "https://api.g3infotech.app",
});
 
export default api;