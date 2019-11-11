export function loginRequest(username, password) {
  return {
    type: '@login/LOGIN_REQUEST',
    payload: {
      username,
      password,
    },
  };
}
export function loginRequestExist() {
  return {
    type: '@login/LOGIN_REQUEST_EXIST',
  };
}

export function loginFailure() {
  return {
    type: '@login/LOGIN_FAILURE',
    payload: {
      error: true,
      message: 'Usuário ou senha invalido',
    },
  };
}

export function forgotPassword() {}
