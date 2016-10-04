/*!
 * Copyright (c) 2015, salesforce.com, inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

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
