import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2d13be78a9432385fd34e31fc63449e76d901424ea02c3333728cd28d94ff9fb"
  }
});
