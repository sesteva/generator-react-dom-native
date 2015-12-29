'use strict';

import React, {
  Component,
  PropTypes
} from 'react-native';

import Render from './<%= componentName %>Render';
import Logic from './<%= componentName %>Logic';

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

export default <%= componentName %>;
