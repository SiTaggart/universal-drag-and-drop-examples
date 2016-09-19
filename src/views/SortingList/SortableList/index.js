import React, {Component} from 'react'
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import SortableListItem from '../SortableListItem';

class SortableList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      listItems: [{
        id: 1,
        text: 'Write a cool JS library'
      }, {
        id: 2,
        text: 'Make it generic enough'
      }, {
        id: 3,
        text: 'Write README'
      }, {
        id: 4,
        text: 'Create some examples'
      }, {
        id: 5,
        text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)'
      }, {
        id: 6,
        text: '???'
      }, {
        id: 7,
        text: 'PROFIT'
      }]
    };

    this.moveItem = this.moveItem.bind(this)
  }

  moveItem(dragIndex, hoverIndex) {
    if(hoverIndex < 0 || hoverIndex > this.state.listItems.length) {
      console.log('too high too low:', hoverIndex);
      return;
    }

    const { listItems } = this.state;
    const dragItem = listItems[dragIndex];

    this.setState(update(this.state, {
      listItems: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragItem]
        ]
      }
    }));
  }

  render () {
    const { listItems } = this.state;

    return (
      <ul className="slds-sortable-list">
        {listItems.map((item, i) => {
          return (
            <SortableListItem
              key={item.id}
              index={i}
              id={item.id}
              text={item.text}
              moveItem={this.moveItem} />
          );
        })}
      </ul>
    );

  }
}

export default DragDropContext(HTML5Backend)(SortableList);
