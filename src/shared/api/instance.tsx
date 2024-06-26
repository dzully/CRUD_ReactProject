import { environment } from "@shared/config/environment";
import axios from "redaxios";

const createInstance = (token: string) =>
  axios.create({
    baseURL: environment.BASE_URL as string,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default createInstance;
