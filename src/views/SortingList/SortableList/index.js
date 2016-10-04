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
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import SortableListItem from '../SortableListItem';

class SortableList extends Component {

  constructor (props) {
    super(props);
    this.state = {
      listItems: this.props.listItems,
      liveText: ''
    };

    this.previousState = null;
    this.cancelMove = this.cancelMove.bind(this);
    this.getItemName = this.getItemName.bind(this);
    this.getItemPosition = this.getItemPosition.bind(this);
    this.moveItem = this.moveItem.bind(this);
    this.dropItem = this.dropItem.bind(this)
    this.grabItem = this.grabItem.bind(this);
  }

  getItemName(index) {
    return this.state.listItems[index].title;
  }

  getItemPosition(index) {
    const offsetPos = index + 1;
    return `${offsetPos} of ${this.state.listItems.length}`;
  }

  moveItem(dragIndex, hoverIndex) {
    if(hoverIndex < 0 || hoverIndex > this.state.listItems.length) {
      console.log('too high too low:', hoverIndex);
      return;
    }

    const { listItems } = this.state;
    const dragItem = listItems[dragIndex];
    const pos = this.getItemPosition(hoverIndex);
    const newState = update(this.state, {
      listItems: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragItem]
        ]
      },
      'liveText': {$set: `${dragItem.title}. New position in list: ${pos}`}
    });

    this.setState(newState);
  }

  dropItem(dropIndex) {
    const itemName = this.getItemName(dropIndex);
    const pos = this.getItemPosition(dropIndex);

    this.setState({
      'liveText': `${itemName}, dropped. Final position in list: ${pos}`
    });
  }

  grabItem(grabIndex) {
    const itemName = this.getItemName(grabIndex);
    const pos = this.getItemPosition(grabIndex);

    this.previousState = this.state;

    this.setState({
      'liveText': `${itemName}, grabbed. Current position in list: ${pos}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.`
    });
  }

  cancelMove(droppedIndex) {
    const itemName = this.getItemName(droppedIndex);
    this.setState({
      listItems: this.previousState.listItems,
      'liveText': `${itemName}, dropped. Re-order cancelled.`
    });
  }

  render () {
    const { listItems } = this.state;

    return (
      <div>
        <div id="item-instructions" className="slds-assistive-text">Press spacebar to grab and re-order</div>
        <div aria-live="assertive" className="slds-assistive-text">{this.state.liveText}</div>
        <ul className="slds-grid slds-grid--pull-padded slds-wrap slds-sortable-list">
          {listItems.map((item, i) => {
            return (
              <SortableListItem
                ariaDescribedby="item-instructions"
                key={item.id}
                index={i}
                id={item.id}
                title={item.title}
                initials={item.initials}
                description={item.description}
                cancelMove={this.cancelMove}
                moveItem={this.moveItem}
                dropItem={this.dropItem}
                grabItem={this.grabItem} />
            );
          })}
        </ul>
      </div>
    );

  }
}

SortableList.propTypes = {
  listItems: PropTypes.array,
}

export default DragDropContext(HTML5Backend)(SortableList);
