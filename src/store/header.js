export default (state = {title: 'Celtic'}, action) => {
  switch(action.type) {
    case 'TITLE':
      return Object.assign({}, state, { title: action.title});
    default:
      return state;
  }  
};
