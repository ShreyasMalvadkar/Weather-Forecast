import { createSelector } from "reselect";

export const citySelector = createSelector(
  (state) => state.getIn(["cityReducer", "selectedCity"]),
  (city) => city
);
