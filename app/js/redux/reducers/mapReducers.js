import * as actionTypes from 'js/redux/actions/actionTypes';

const mapReducer = (state = 0, action) => {
  console.log('In map reducer');
  return action.type === actionTypes.ZOOM_IN ? state + action.payload : state;
};

export default mapReducer;
