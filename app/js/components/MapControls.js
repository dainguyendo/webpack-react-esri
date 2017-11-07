import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as mapActions from 'js/redux/actions/mapActions';

class MapControls extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div>{`Zoom Level: ${this.props.zoomlevel}`}</div>
        <div className='btn' onClick={this.props.actions.zoomIn()}>Zoom In</div>
      </div>
    );
  }
}

// Mapping Redux State to props that component requires
const mapStateToProps = (state) => ({
  zoomlevel: state.mapReducer
});

// Mapping Redux dispatch as prop that component requires
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(mapActions, dispatch) };
};

// const mapDispatchToProps = (dispatch) => ({
//   zooomIn: () => {dispatch(zoomIn());}
// });

// This is a "Smart Component" - therefore needs to connect to our Redux store
export default connect(mapStateToProps, mapDispatchToProps)(MapControls);
