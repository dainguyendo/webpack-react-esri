import * as actionTypes from 'js/redux/actions/actionTypes';

export const zoomIn = () => {
  console.log('In action zoomIn');
  return {
    type: actionTypes.ZOOM_IN,
    payload: 1
  };
}
