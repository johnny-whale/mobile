import Axios from "axios";

export class API {
  static http = Axios.create({
    baseURL: "https://api.covidtracking.com/v1/states/",
  });
  static getStates() {
    return API.http.get("info.json");
  }
  static getState(id) {
    return API.http.get(`${id}/current.json`);
  }
}
