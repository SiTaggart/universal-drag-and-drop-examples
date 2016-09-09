import React, {Component, PropTypes} from 'react'

class ResizeView extends Component {
  render () {
    return (
      <div>
        <h1>Resizing a Column</h1>
        {this.props.children}
      </div>
    )
  }
}

ResizeView.propTypes = {
  children: PropTypes.node,
}

export default ResizeView
