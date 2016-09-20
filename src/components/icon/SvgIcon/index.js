import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class SvgIcon extends Component {

  constructor(props) {
    super(props);
    this.getUse = this.getUse.bind(this);
  }

  getUse() {
    const href = `#${this.props.symbol}`;
    return `<use xlink:href="${href}"></use>`;
  }

  render() {
    let colorCssClass = '';

    if(this.props.sprite === 'utility') {
      colorCssClass = 'slds-icon-text-default';
    }
    if (this.props.color === 'warning') {
      colorCssClass = 'slds-icon-text-warning';
    }
    if (this.props.color === 'error') {
      colorCssClass = 'slds-icon-text-error';
    }

    const svgClass = classNames(
      this.props.className,
      {
        'slds-icon': (!this.props.className),
        [`slds-icon--${this.props.size}`]: (this.props.size !== undefined)
      },
      colorCssClass
    );

    return (
      <svg
        aria-hidden={true}
        className={svgClass}
        dangerouslySetInnerHTML={{__html: this.getUse()}} />
    );
  }
}

SvgIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  sprite: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default SvgIcon;
