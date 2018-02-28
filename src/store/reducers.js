import {ADD_PROMISE} from './actions';


const initialState = {
  promises: []
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PROMISE:
        return {...state, promises: [...state.promises, action.payload]};
      default:
        return state;
    }
};
export default rootReducer;