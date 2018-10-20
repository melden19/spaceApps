import types from '../constants/actionTypes'

const changeFontStatusAction = () => {
  return {
    type: types.changeFontStatus,
  }
};

export default {
  changeFontStatus: changeFontStatusAction
};
