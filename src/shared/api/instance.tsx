import axios from "redaxios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjVlSW9VeWRrNm4xUU9nc0siLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE5NDAyMjkyLCJpYXQiOjE3MTkzOTg2OTIsImlzcyI6Imh0dHBzOi8vYnRlZWVoZXNxeWxpcWR5c3R2bmwuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjUzYzMyYzYyLTQzZWMtNDY2Yi04Nzg0LTVjOGMwYjk0ODVjOCIsImVtYWlsIjoiZHp1bHN5YWtpbWluNjFAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6ImR6dWxzeWFraW1pbjYxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJzdWIiOiI1M2MzMmM2Mi00M2VjLTQ2NmItODc4NC01YzhjMGI5NDg1YzgifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTcxOTM5NTM0NH1dLCJzZXNzaW9uX2lkIjoiYmE4YWI0MWItMzRiMS00NTlmLTllNGEtYmNmNWI1MTM4YTAzIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.-mHkYlo4Md5bR2PnlV3rzWmU1O-AYn89RsY3Xr-2nvs",
  },
});

export default instance;
