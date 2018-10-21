import types from '../constants/actionTypes';
import axios from 'axios';

const changeFontStatusAction = () => {
  return {
    type: types.changeFontStatus,
  }
};

const uploadInfo = (url, patritionName) => {
  return async (dispatch) => {
    const data = await axios.get(url).then(responseData => responseData).catch(err => { throw newError(err) });
    return dispatch({
      type: types.uploadData,
      data,
      patritionName
    });
  }
}

export default {
  changeFontStatus: changeFontStatusAction,
  uploadInfo
};
