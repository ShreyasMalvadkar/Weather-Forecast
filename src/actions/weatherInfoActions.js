export const weatherInfoActions = {
  request: "REQUEST_WEATHER_INFO",
  success: "WEATHER_INFO_SUCCESS",
  failure: "WEATHER_INFO_FAILURE",
};

export const startWeatherLoader = () => {
  return {
    type: weatherInfoActions.request,
  };
};

export const getWeatherSuccess = (weatherData) => {
  return {
    type: weatherInfoActions.success,
    payload: weatherData,
  };
};

export const getWeatherFailure = (error) => {
  return {
    type: weatherInfoActions.failure,
    payload: error,
  };
};
