import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import Icon from '../../../components/icon';

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
          <Icon
            assistiveText="Drag item to a new location"
            sprite="utility"
            symbol="rows"
            size="x-small"
          />
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
