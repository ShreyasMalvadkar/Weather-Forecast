import { weatherInfoActions } from "../actions/weatherInfoActions";
import { fromJS } from "immutable";

const initialState = fromJS({
  isLoading: true,
  hasErrors: false,
  data: null,
});

const weatherInfoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case weatherInfoActions.request:
      return state.set("isLoading", true);

    case weatherInfoActions.success:
      return state.merge({
        isLoading: false,
        hasErrors: false,
        data: payload,
      });

    case weatherInfoActions.failure:
      return state.merge({
        isLoading: false,
        hasErrors: true,
        data: payload,
      });

    default:
      return state;
  }
};

export default weatherInfoReducer;
