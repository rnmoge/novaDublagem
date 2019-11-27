export function menuRequest() {
  return {
    type: '@menu/MENU_REQUEST',
  };
}
export function menuSucess(userName) {
  return {
    type: '@menu/MENU_SUCESS',
    payload: {userName},
  };
}
