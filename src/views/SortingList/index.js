import React, {Component, PropTypes} from 'react'

class SortingListView extends Component {
  render () {
    return (
      <div>
        <h1>Sorting a List</h1>
        {this.props.children}
      </div>
    )
  }
}

SortingListView.propTypes = {
  children: PropTypes.node,
}

export default SortingListView
