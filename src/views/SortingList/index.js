import React, {Component, PropTypes} from 'react'
import './index.css';
import SortableList from './SortableList';

class SortingListView extends Component {
  constructor (props) {
    super(props);

    this.listItems = [{
      id: 1,
      title: 'Sales Cloud',
      initials: 'SC',
      description: 'The primary internal Salesforce org. Used to run our...'
    }, {
      id: 2,
      title: 'Marketing Cloud',
      initials: 'MC',
      description: 'Salesforce Marketing Cloud lets businesses of any size...'
    }, {
      id: 3,
      title: 'HR Concierge',
      initials: 'HR',
      description: 'Community for managing employee benefits and time off.'
    }, {
      id: 4,
      title: 'My Money',
      initials: 'MM',
      description: 'Manage your finances across multiple financial platforms...'
    }, {
      id: 5,
      title: 'Call Center',
      initials: 'CC',
      description: 'The key to call center and contact center management is more...'
    }, {
      id: 6,
      title: 'Customer Support Community',
      initials: 'CS',
      description: 'Areas of Focus are used to track customer support for your...'
    }, {
      id: 7,
      title: 'Salesforce Chatter',
      initials: 'CH',
      description: 'The Salesforce Chatter social network, including profiles and feeds'
    }];
  }

  render () {
    return (
      <div>
        <SortableList listItems={this.listItems} />
      </div>
    )
  }
}

SortingListView.propTypes = {
  children: PropTypes.node,
}

export default SortingListView
