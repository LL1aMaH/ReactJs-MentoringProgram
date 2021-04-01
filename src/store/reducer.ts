import { NAV_BAR_BUTTONS, SORT_BY } from 'Consts/index';
import { TInitialState } from './types';

export const initialState: TInitialState = {
  data: [],
  total: null,
  offset: null,
  limit: null,
  isLoading: false,
  genre: NAV_BAR_BUTTONS[0],
  sort: SORT_BY[0],
};

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_MOVIES_START':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        total: action.payload.total,
        offset: action.payload.offset,
        limit: action.payload.limit,
      };
    case 'CHANGE_ACTIVE_BUTTON':
      return {
        ...state,
        genre: action.payload,
      };
    case 'CHANGE_SORT':
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
