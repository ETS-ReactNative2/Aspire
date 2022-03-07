import {
  CARD_SPENDING_LIMIT,
  CARD_WEEKLY_LIMIT_ENABLED,
  GET_DEBIT_CARD_FEATURES
 } from './actions.js';

const initialState = {
  limit: '5,000',
  weeklyLimitEnabled: false,
  debitCardFeatures: [],
}

function cardReducer(state = initialState, action) {
  switch (action.type) {
    case CARD_SPENDING_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    case CARD_WEEKLY_LIMIT_ENABLED:
      return {
        ...state,
        weeklyLimitEnabled: action.payload,
      };
    case GET_DEBIT_CARD_FEATURES:
      return {
        ...state,
        debitCardFeatures: action.payload,
      };
    default:
      return state;
  }
}

export default cardReducer;
