import React, {Component, PropTypes} from 'react'
import './index.css';
import SortableList from './SortableList';

class SortingListView extends Component {
  constructor (props) {
    super(props);

    this.state = {
      listItems: [{
        id: 1,
        text: 'Home'
      }, {
        id: 2,
        text: 'Opportunities'
      }, {
        id: 3,
        text: 'Leads'
      }, {
        id: 4,
        text: 'Accounts'
      }, {
        id: 5,
        text: 'Contacts'
      }, {
        id: 6,
        text: 'Campaigns'
      }, {
        id: 7,
        text: 'Reports'
      }]
    };
  }

  render () {
    return (
      <div>
        <SortableList listItems={this.state.listItems} />
      </div>
    )
  }
}

SortingListView.propTypes = {
  children: PropTypes.node,
}

export default SortingListView
