import { FULFILLED } from "./teams";
import { debounceTime } from "rxjs/operators";
import { ofType } from "redux-observable";

export const updateCriteriaEpic = (action$, store) =>
  action$.pipe(ofType("FILTER_ITEM_CHANGED"), debounceTime(1000));

const defaultCriteria = {
  items: [],
};

export const criteriaReducer = (state = defaultCriteria, action) => {
  switch (action.type) {
    case FULFILLED:
      return action.response.criteria;
    case "FILTER_ITEM_CHANGED":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.key === action.key) {
            return {
              ...item,
              selected: action.selected,
            };
          } else {
            return item;
          }
        }),
      };

    default:
      return state;
  }
};
