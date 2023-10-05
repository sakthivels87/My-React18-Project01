import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "313dd348562448efaaf464c6037dcfe1",
  },
});
