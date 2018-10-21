import types from '../constants/actionTypes';

const initialState = {
  fontDownloaded: false,
  dataLibrary: {

  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.changeFontStatus:
      return { ...state, fontDownloaded: true };
    case types.uploadData:
      return {
        ...state,
        dataLibrary: {
          ...state.dataLibrary,
          [action.patritionName]: action.data
        }
      };
  default:
    return state;
  }
}