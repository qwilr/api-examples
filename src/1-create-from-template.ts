import { StatusCodes } from "http-status-codes";
import axios, { AxiosError } from "axios";
import { config } from "./config";

const httpClient = axios.create({
  baseURL: config.api.baseUrl,
  headers: {
    Authorization: `Bearer ${config.api.accessToken}`
  }
});

httpClient.post("/v1/projects", {
  "templateId": config.sample1.templateId,
  "name": "New page from the template"
}).then(response => {
  console.log(response.data);
}).catch(error => {
  const err: AxiosError = error;

  if (err.response.status === StatusCodes.BAD_REQUEST) {
    console.error(err.response.data);
  }
})
