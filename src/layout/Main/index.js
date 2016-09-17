import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

class MainLayout extends Component {
  render () {
    return (
      <div className="slds-container--large slds-container--center">
        {React.cloneElement(this.props.children, {})}
        <nav role="navigation">
          <ul className="slds-list--horizontal slds-has-dividers--left slds-has-block-links--space">
            <li className="slds-item">
              <Link to="/">{'Home'}</Link>
            </li>
            <li className="slds-item">
              <Link to="/sorting-list">{'Sorting a List'}</Link>
            </li>
            <li className="slds-item">
              <Link to="/resize">{'Resizing a Column'}</Link>
            </li>
            <li className="slds-item">
              <Link to="/kanban">{'Kanban Style Card Moving'}</Link>
            </li>
            <li className="slds-item">
              <Link to="/object-on-canvas">{'Changing an Object on a Canvas'}</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout
