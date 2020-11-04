import { StatusCodes } from "http-status-codes";
import axios, { AxiosError } from "axios";
import { config } from "../config";

const httpClient = axios.create({
  baseURL: config.baseUrl,
  headers: {
    Authorization: `Bearer ${config.accessToken}`,
  },
});

httpClient.post("/v1/projects", {
  templateId: "5f89619f457c29e007503d61",
  name: "New page from the template",
  substitutions: {
    sampleToken: "Sample Replaced Text",
  },
}).then(response => {
  console.log(response.data);
}).catch(error => {
  const err: AxiosError = error;

  if (err.response.status === StatusCodes.BAD_REQUEST) {
    console.error(err.response.data);
  }
})
