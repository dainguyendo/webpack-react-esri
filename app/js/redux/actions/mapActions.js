import * as actionTypes from 'js/redux/actions/actionTypes';

export const zoomIn = () => {
  return {
    type: actionTypes.ZOOM_IN,
    payload: 1
  };
};
