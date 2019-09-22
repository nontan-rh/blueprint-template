import { handleActions } from 'redux-actions';
import { INCREMENT } from '../constants/ActionTypes';
import { initialState } from '../states';

const Reducer = handleActions(
  {
    [INCREMENT]: state => ({ ...state, counter: state.counter + 1 }),
  },
  initialState
);

export default Reducer;
