import axios from "axios";

const KEY = "AIzaSyAMCFO1-sf_hnFzNqpyIjA84wU6FybaXJ4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
