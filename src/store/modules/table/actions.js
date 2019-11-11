export function loginRequest(username, password) {
  return {
    type: '@login/LOGIN_REQUEST',
    payload: {
      username,
      password,
    },
  };
}
