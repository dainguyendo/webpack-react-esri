import * as actionTypes from 'js/redux/actions/actionTypes';

const mapReducer = (state = 0, action) => {
  return action.type === actionTypes.ZOOM_IN ? state + action.payload : state;
};

export default mapReducer;
