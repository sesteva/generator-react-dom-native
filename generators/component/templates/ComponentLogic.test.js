'use strict';

import React from 'react'
import TestUtils from 'react-addons-test-utils'
const <%= componentName %> = require.requireActual('../<%= componentName %>Logic');

class Render extends React.Component {
    render() { return false; }
}

describe('<%= componentName %>', function () {
  let Component;

  beforeEach(function(){
    Component = <%= componentName %>(React,Render);
    instance = new Component({
      'loadProfile': ()=> {
          return {'name':'santiago'}
      }
    })
    spyOn(instance.props, 'loadProfile')
  })

  it('should create a component with default state', function(){
    let instance = new Component()
    let defaultState = { }
    expect(instance.state).toEqual(defaultState)
  })

  it('should load the profile when component did mount', ()=> {
    instance.componentDidMount()
    expect(instance.props.loadProfile).toHaveBeenCalled()
  })

});
