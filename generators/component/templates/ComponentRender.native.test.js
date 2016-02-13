
import React, {
  Text,
  View
} from 'react-native';
import shallowHelpers  from 'react-shallow-renderer-helpers';
const shallowRenderer = shallowHelpers.createRenderer();

// Mocking Examples
// jest.setMock('react-native-vector-icons/FontAwesome', 'IconMock')
// jest.setMock('../../EditProfileName/EditProfileName.native', 'InputMock')

const <%= componentName %> = require.requireActual('../<%= componentFileName %>Render.native');

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
