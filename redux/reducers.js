import { CARD_SPENDING_LIMIT } from './actions.js';
import { CARD_WEEKLY_LIMIT_ENABLED } from './actions.js';

const initialState = {
  limit: '5,000',
  weeklyLimitEnabled: false,
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
    default:
      return state;
  }
}

export default cardReducer;
