import { StatusCodes } from "http-status-codes";
import axios, { AxiosError } from "axios";
import { config } from "./config";

const httpClient = axios.create({
  baseURL: config.api.baseUrl,
  headers: {
    Authorization: `Bearer ${config.api.accessToken}`
  }
});

async function sample1() {
  try {
    const response = await httpClient.post("/v1/projects", {
      "templateId": config.sample3.templateId,
      "name": "New page with custom tokens",
      "substitutions": {
        "sampleToken": "Sample Replaced Text"
      }
    });
    console.log(response.data);
  } catch (e) {
    const err: AxiosError = e;

    if (err.response.status === StatusCodes.BAD_REQUEST) {
      console.error(err.response.data);
    }
  }

}

sample1();
