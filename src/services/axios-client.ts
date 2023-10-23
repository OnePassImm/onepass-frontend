import axios from "axios";

const axiosClient = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "Accept-Encoding": "gzip"
  }
});

export default axiosClient