import types from '../constants/actionTypes';

const initialState = {
  fontDownloaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.changeFontStatus:
      return { ...state, fontDownloaded: true };
  default:
    return state;
  }
}