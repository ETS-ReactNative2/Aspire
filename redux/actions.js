export const CARD_SPENDING_LIMIT = 'CARD_SPENDING_LIMIT';
export const CARD_WEEKLY_LIMIT_ENABLED = 'CARD_WEEKLY_LIMIT_ENABLED';

export const setCardSpendingLimit = limit => dispatch => {
  dispatch({
    type: CARD_SPENDING_LIMIT,
    payload: limit,
  });
};

export const setCardWeeklyLimitEnabled = weeklyLimitEnabled => dispatch => {
  dispatch({
    type: CARD_WEEKLY_LIMIT_ENABLED,
    payload: weeklyLimitEnabled,
  });
};
