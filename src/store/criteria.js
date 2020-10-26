import { FULFILLED } from './teams';
import Rx from 'rxjs/Rx';

function updateWindowLocation(criteria){
}
export const updateCriteriaEpic = (action$, store) =>
  new Rx.Observable(() =>
    action$.ofType('FILTER_ITEM_CHANGED')
      .debounceTime(1000)
      .subscribe(() => {updateWindowLocation(store.getState());}) // subscription is returned so it can be cleaned up
  );

const defaultCriteria = {
  items: [],
};

export const criteriaReducer = (state = defaultCriteria, action) => {
  switch(action.type) {
    case FULFILLED:
      return action.response.criteria;
    case 'FILTER_ITEM_CHANGED':

      return {
        ...state,
        items: state.items.map((item) => {
          if (item.key === action.key) {
            return {
              ...item,
              selected: action.selected
            };
          } else {
            return item;
          }
        })
      }

    default:
      return state;
  }
};
