import { FULFILLED } from './teams';

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
