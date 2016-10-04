import React, {Component, PropTypes} from 'react';

class MainLayout extends Component {
  render () {
    return (
      <div className="slds-container--large slds-container--center">
        {React.cloneElement(this.props.children, {})}
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout
