import { getCardList } from "../reducers/Card";
import { axiosInstances } from "./ApiCalls";

/** api methods*/

export const apiCard = (page, perPage) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    await axiosInstances.api
      .post(`getCardList`, { page, perPage })
      .then((response) => {
        dispatch(getCardList(response.data));
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
