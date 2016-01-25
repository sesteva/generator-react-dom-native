'use strict';

import React from 'react'
import TestUtils from 'react-addons-test-utils'
const <%= componentName %> = require.requireActual('../<%= componentFileName %>Logic');

class Render extends React.Component {
    render() { return false; }
}

describe('<%= componentName %>', function () {
  let Component, instance;

  beforeEach(function(){
    Component = <%= componentName %>(React,Render);
  })

  it('should create a component with default props', function(){
    instance = new Component({'a':1})
    expect(instance.props).toEqual({
      'a':1
    })
  })

});
