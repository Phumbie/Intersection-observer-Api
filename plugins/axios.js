import Vue from "vue";
import axios from "axios";
import auth from "@/utils/auth";
const http = axios.create({
  baseURL:"https://staging-api.thespottrapp.com/"
});
if (process.browser) {
  http.interceptors.request.use(config => {
    config.headers.Authorization = "Bearer " + auth.getToken();
    config.headers["Accept"] = "application/json";
    config.headers["Content-Type"] = "application/json";
    return config;
  });
}
Vue.prototype.$http = http;
