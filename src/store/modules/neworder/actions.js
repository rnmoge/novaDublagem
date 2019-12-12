export function backDetailsClient() {
  return {
    type: '@neworder/BACK_DETAILS_CLIENT',
  };
}
export function handleProducts(table, condition) {
  return {
    type: '@neworder/HANDLE_PRODUCTS',
    payload: {table, condition},
  };
}
