import { setToLocalStorage } from "../Helpers/Helpers";
import { axiosInstances } from "./ApiCalls";
/** api methods*/

export const apiAuth = (data) => async (_) => {
  return new Promise(async (resolve, reject) => {
    await axiosInstances.api
      .post("getToken", data)
      .then((response) => {
        setToLocalStorage("token", response.data.token);
        resolve(response.data);
      })
      .catch((err) => {
        let error = { ...err };
        alert("Sorry unable to process your request. Please try again later");
        error.response = error.response || { response: { data: [] } };
        reject(error.response.data);
      });
  });
};
