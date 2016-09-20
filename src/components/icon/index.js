import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import SvgIcon from './SvgIcon';

class Icon extends Component {
  render() {
    const iconClass = classNames(
      this.props.className,
      {
        'slds-icon_container': true,
        'slds-icon_container--circle': (this.props.sprite === 'action'),
        [`slds-icon-${this.props.sprite}-${this.props.symbol}`]: (this.props.sprite === 'standard' || this.props.sprite === 'action')
      }
    );
    return (
      <span className={iconClass} title={this.props.assistiveText}>
        <SvgIcon color={this.props.color} size={this.props.size} sprite={this.props.sprite} symbol={this.props.symbol}></SvgIcon>
        <span className="slds-assistive-text">{this.props.assistiveText}</span>
      </span>
    );
  }
}

Icon.propTypes = {
  assistiveText: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  sprite: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Icon;