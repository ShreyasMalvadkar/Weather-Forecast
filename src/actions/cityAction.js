export const cityActions = {
  change: "CHANGE_SELECTED_CITY",
};

export const changeCity = (city) => {
  return {
    type: cityActions.change,
    payload: city,
  };
};
