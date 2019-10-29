import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  error: false,
  message: '',
  username: '',
  password: '',
};
export default function Login(state = INITIAL_STATE, action) {
  console.tron.log(state);
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        console.tron.log('adicionou produto');
      });
    default:
      return state;
  }
}
