import axios from "axios";

const KEY = "AIzaSyAGWwQoqCNac7ZCGxkG6GVSJJc_9r1Pqws";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
