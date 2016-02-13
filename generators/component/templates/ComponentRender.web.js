import React, {
  PropTypes,
  Component
} from 'react';

import ReactDOM from 'react-dom';

class <%= componentName %> extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div style={styles.wrapper}>
      </div>
    );
  }
};


<%= componentName %>.propTypes = {}

module.exports = <%= componentName %>;

var styles = {
  wrapper: {
    height: '100%',
    width: '100%'
  },
};
