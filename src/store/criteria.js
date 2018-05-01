import { FULFILLED } from './teams';
import Rx from 'rxjs/Rx';

function updateWindowLocation(criteria){
  console.log('update window location', criteria.criteria);
}
export const updateCriteriaEpic = (action$, store) =>
  new Rx.Observable(() =>
    action$.ofType('FILTER_ITEM_CHANGED')
      .debounceTime(1000)
      .subscribe(() => {updateWindowLocation(store.getState()); console.log(store)}) // subscription is returned so it can be cleaned up
  );
      

export const criteriaReducer =  (state = [], action) => {
  switch(action.type) {
    case FULFILLED:
      return action.response.criteria;
    case 'FILTER_ITEM_CHANGED':
      return state.map((filter, index) => {
        if(index === action.filter) {
          return { ...filter, items: filter.items.map(item => {
            if (item.key === action.item.key) {
              return { ...item, selected: action.item.selected };
            } else {
              return item; 
            } 
          }) };
        } else {
          return filter;
        }
      });
    default:
      return state;
  }
};
