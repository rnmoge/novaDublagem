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

export function loginforgotPassword() {
  return {
    type: '@login/LOGIN_FORGOT_PASSWORD',
  };
}
export function menuSucess(user) {
  console.tron.log('user');
  console.tron.log(user);
  return {
    type: '@login/MENU_SUCESS',
    payload: {user},
  };
}
