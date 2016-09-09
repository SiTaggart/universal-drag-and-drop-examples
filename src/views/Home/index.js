import React, {Component, PropTypes} from 'react'

class HomeView extends Component {
  render () {
    return (
      <div>
        <h1>Home</h1>
        {this.props.children}
      </div>
    )
  }
}

HomeView.propTypes = {
  children: PropTypes.node,
}

export default HomeView
