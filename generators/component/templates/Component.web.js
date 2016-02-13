'use strict';

import React, {
  Component,
  PropTypes
} from 'react';
import ReactDOM from 'react-dom';

import Render from './<%= componentFileName %>Render.web';
import Logic from './<%= componentFileName %>Logic';

let MyInnerComponent = Logic(React,Render);

class <%= componentName %> extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyInnerComponent {...this.props}/>
    );
  }

}

module.exports = <%= componentName %>;
