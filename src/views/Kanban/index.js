import React, {Component, PropTypes} from 'react'

class KanbanView extends Component {
  render () {
    return (
      <div>
        <h1>Kanban Style Card Moving</h1>
        {this.props.children}
      </div>
    )
  }
}

KanbanView.propTypes = {
  children: PropTypes.node,
}

export default KanbanView
