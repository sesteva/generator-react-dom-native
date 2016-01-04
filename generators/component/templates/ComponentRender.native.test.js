
import React, {
  Text,
  View
} from 'react-native'
import shallowHelpers  from 'react-shallow-renderer-helpers'
jest.setMock('react-native-vector-icons/FontAwesome', 'Icon')
const <%= componentName %> = require.requireActual('../<%= componentName %>Render.native');
const shallowRenderer = shallowHelpers.createRenderer();

describe('<%= componentName %>', function() {

  const renderComponent = (props)=> {
    shallowRenderer.render(() => <<%= componentName %> {...props}/>);
    return shallowRenderer.getRenderOutput();
  }

  it('should use title Title', () => {
    let props = {}
    let output = renderComponent(props);
    expect(output.type).toBe(View);
    expect(output).toContainReactNodeInTreeLike(<Text>Title</Text>);
  });

});
