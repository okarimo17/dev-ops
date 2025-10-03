import { sendRequest } from "./global";


export const hostnameApi = {
  fetchHostname: () => sendRequest("/"),
};
