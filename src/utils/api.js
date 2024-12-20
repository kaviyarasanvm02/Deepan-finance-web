import axios from "axios";

export const Url = "http://localhost:8080";
export const BaseUrl = "http://localhost:8080/deepanindia";

export const instance = axios.create({
  baseURL: BaseUrl 
});
