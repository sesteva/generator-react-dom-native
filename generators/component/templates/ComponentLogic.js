'use strict';

module.exports = (React,InnerComponent) => class extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return <InnerComponent
      {...this.state}
      {...this.props} />
  }

}
