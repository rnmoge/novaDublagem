export function menuRequest() {
  return {
    type: '@menu/MENU_REQUEST',
  };
}
export function menuSucess(data) {
  return {
    type: '@menu/MENU_SUCESS',
    payload: {data},
  };
}
