import axios from "axios";
const apiUrl = "http://www.omdbapi.com/?apikey=c388f54&";

export const fetchMovie = (title) => {
  return axios.get(apiUrl + "t=" + title);
};
