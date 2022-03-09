import CartActionTypes from './cartTypes';

const INITIAL_STATE = {
  hidden: true,
};

console.log(INITIAL_STATE, 'INITIAL_STATE');

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
