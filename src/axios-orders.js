import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-577c4-default-rtdb.firebaseio.com/",
});

export default instance;
