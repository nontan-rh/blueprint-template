import { createAction } from 'redux-actions';
import { INCREMENT } from '../constants/ActionTypes';

export const increment = createAction<void>(INCREMENT);
