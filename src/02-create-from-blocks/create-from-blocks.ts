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
  name: "New page from blocks",
  blocks: [
    "oqa9EsmipR_T5hayLiaKKkRIJGjb6A",
  ],
}).then(response => {
  console.log(response.data);
}).catch(error => {
  const err: AxiosError = error;

  if (err.response.status === StatusCodes.BAD_REQUEST) {
    console.error(err.response.data);
  }
})

