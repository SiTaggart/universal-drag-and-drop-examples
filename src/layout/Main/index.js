import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

class MainLayout extends Component {
  render () {
    return (
      <div className="slds-container--medium slds-container--center">
        {React.cloneElement(this.props.children, {})}
        <nav role="navigation">
          <ul>
            <li>
              <Link to="/">{'Home'}</Link>
            </li>
            <li>
              <Link to="/sorting-list">{'Sorting a List'}</Link>
            </li>
            <li>
              <Link to="/resize">{'Resizing a Column'}</Link>
            </li>
            <li>
              <Link to="/kanban">{'Kanban Style Card Moving'}</Link>
            </li>
            <li>
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
