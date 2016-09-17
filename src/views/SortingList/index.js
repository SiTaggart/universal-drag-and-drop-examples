import React, {Component, PropTypes} from 'react'
import './index.css';
import SortableList from './SortableList';

class SortingListView extends Component {
  render () {
    return (
      <div>
        <h1>Sorting a List</h1>
        <SortableList />
      </div>
    )
  }
}

SortingListView.propTypes = {
  children: PropTypes.node,
}

export default SortingListView
