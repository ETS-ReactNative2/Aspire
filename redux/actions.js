export const CARD_SPENDING_LIMIT = 'CARD_SPENDING_LIMIT';
export const CARD_WEEKLY_LIMIT_ENABLED = 'CARD_WEEKLY_LIMIT_ENABLED';
export const GET_DEBIT_CARD_FEATURES = 'GET_DEBIT_CARD_FEATURES';

const API_URL = 'https://jsonkeeper.com/b/8WUH';

export const getDebitCardFeatures = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_DEBIT_CARD_FEATURES,
          payload: json
        });
      } else {
        console.log("Unable to fetch");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

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
