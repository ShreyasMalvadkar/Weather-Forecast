import {
  getWeatherFailure,
  getWeatherSuccess,
} from "../actions/weatherInfoActions";
import { default as axios } from "axios";
import { API_BASE_URL } from "../constants";
import sampleResponse from "../sample-response.json";

export const getWeatherData = (locationKey, dispatch) => {
  dispatch(getWeatherSuccess(sampleResponse));
  // axios
  //   .get(`${API_BASE_URL}/${locationKey}`, {
  //     params: {
  //       apikey: process.env.REACT_APP_API_KEY,
  //       metric: true,
  //     },
  //   })
  //   .then((response) => dispatch(getWeatherSuccess(response.data)))
  //   .catch((error) => dispatch(getWeatherFailure(error)));
};
