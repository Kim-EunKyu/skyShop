import axios from "axios";
const client = axios.create({
  baseURL: "https://skyshop-project.herokuapp.com/",
});

export default client;
