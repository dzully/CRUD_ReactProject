import axios from "redaxios";

const createInstance = (token: string) =>
  axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default createInstance;
