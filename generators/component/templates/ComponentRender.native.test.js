
import React, {
  Text,
  View
} from 'react-native'
import shallowHelpers  from 'react-shallow-renderer-helpers'
// Mocking Examples
// jest.setMock('react-native-vector-icons/FontAwesome', 'Icon')
// jest.setMock('../../EditProfileName/EditProfileName.native', 'Input')
const <%= componentName %> = require.requireActual('../<%= componentName %>Render.native');
const shallowRenderer = shallowHelpers.createRenderer();

describe('<%= componentName %>', function() {

  const renderComponent = (props)=> {
    shallowRenderer.render(() => <<%= componentName %> {...props}/>);
    return shallowRenderer.getRenderOutput();
  }

  it('should use title Title', () => {
    let props = {
      actions: {
        updateProfile: ()=>{}
      }
    }
    let output = renderComponent(props);
    expect(output.type).toBe(View);
    expect(output).toContainReactNodeInTreeLike(<Text>Title</Text>);
  });

});
