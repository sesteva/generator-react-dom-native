
import React from 'react';
import shallowHelpers  from 'react-shallow-renderer-helpers';
const shallowRenderer = shallowHelpers.createRenderer();

const <%= componentName %> = require.requireActual('../<%= componentFileName %>Render.web');

describe('<%= componentName %>', function() {

  const renderComponent = (props)=> {
    shallowRenderer.render(() => <<%= componentName %> {...props}/>);
    return shallowRenderer.getRenderOutput();
  }

  it('should use title Title', () => {
    let props = {}
    let output = renderComponent(props);
    expect(output.type).toBe('div');
    expect(output).toContainReactNodeInTreeLike(<div>Title</div>);
  });

});
