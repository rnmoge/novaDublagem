export function commonLoadingActivityOn(message) {
  return {
    type: '@common/LOADING_ACTIVITY_ON',
    payload: {
      message,
      error: false,
      loading: true,
    },
  };
}
export function commonActionSucess(message) {
  return {
    type: '@common/ACTION_SUCESS',
    payload: {
      message,
      error: false,
      loading: false,
    },
  };
}
export function commonActionFailure(message) {
  return {
    type: '@common/ACTION_FAILURE',
    payload: {
      message,
      error: true,
      loading: false,
    },
  };
}
