import { createSelector } from "reselect";

export const weatherInfoReducerSelector = createSelector(
  (state) => state.get("weatherInfoReducer"),
  (weatherInfoReducer) => weatherInfoReducer
);

export const isLoadingSelector = createSelector(
  weatherInfoReducerSelector,
  (reducer) => reducer.get("isLoading")
);

export const hasErrorsSelector = createSelector(
  weatherInfoReducerSelector,
  (reducer) => reducer.get("hasErrors")
);

export const dataSelector = createSelector(
  weatherInfoReducerSelector,
  (reducer) => reducer.get("data")
);
