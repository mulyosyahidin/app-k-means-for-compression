import axios from "axios";
import Config from "../Config";

const index = () => {
  let url = Config.SERVER_URL + "/files";

  return axios.get(url).then((response) => {
    return response.data;
  });
};

const store = (data) => {
  let url = Config.SERVER_URL;
  let config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  return axios.post(url, data, config).then((response) => {
    return response.data;
  });
};

const show = (id) => {
  let url = Config.SERVER_URL + "/files/" + id;

  return axios.get(url).then((response) => {
    return response.data;
  });
}

export { index, store, show };
