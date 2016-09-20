import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class Item extends Component {
  render () {
    const { title, description, initials, isDragging, isGrabbed, ariaDescribedby, handleKeyDown } = this.props;
    const itemClasses = classNames(
      'slds-app-launcher__tile slds-text-link--reset slds-is-draggable',
      {'slds-is-grabbed': (isGrabbed || isDragging)}
    );

    return(
      <a
        aria-describedby={ariaDescribedby}
        href="#"
        onKeyDown={handleKeyDown}
        className={itemClasses}
      >
        <div className="slds-app-launcher__tile-figure">
          <span className="slds-avatar slds-avatar--large slds-align--absolute-center slds-icon-custom-27">{initials}</span>
          <span className="slds-icon_container" title="Drag item to a new location">
            <span className="slds-assistive-text">Drag item to a new location</span>
          </span>
        </div>
        <div className="slds-app-launcher__tile-body">
          <span className="slds-text-link">{title}</span>
          <p>{description}</p>
        </div>
      </a>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  initials: PropTypes.string.isRequired,
  ariaDescribedby: PropTypes.string,
  isDragging: PropTypes.bool.isRequired,
  isGrabbed: PropTypes.bool,
  handleKeyDown: PropTypes.func.isRequired,
}

export default Item