const counterReducer = (state = 0, action) => {
  /*if (action.type === 'ADD1') {
    return (state = state + 1);
  }
  return state;*/

  switch (action.type) {
    case 'ADD1':
      return (state = state + 1);
    case 'ADD10':
      return (state = state + 10);
    case 'REMOVE1':
      return (state = state - 1);
    case 'REMOVE10':
      return (state = state - 10);
    case 'RESET':
      return (state = 0);
    default:
      return state;
  }
};
export default counterReducer;
