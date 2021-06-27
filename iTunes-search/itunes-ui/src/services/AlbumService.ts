import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/iTunes",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getAlbums(artist: string) {
    return apiClient.get(`/search?artist=${artist}`);
  },
};
