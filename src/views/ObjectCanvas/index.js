import React, {Component, PropTypes} from 'react'

class ObjectCanvasView extends Component {
  render () {
    return (
      <div>
        <h1>Changing an Object on a Canvas</h1>
        {this.props.children}
      </div>
    )
  }
}

ObjectCanvasView.propTypes = {
  children: PropTypes.node,
}

export default ObjectCanvasView
