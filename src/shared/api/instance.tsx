import axios from "redaxios";

const createInstance = (token: string) =>
  axios.create({
    baseURL: import.meta.env.VITE_BASE_URL as string,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default createInstance;
