import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MainLayout from './layout/Main';
import HomeView from './views/Home';
import KanbanView from './views/Kanban';
import ObjectCanvasView from './views/ObjectCanvas';
import ResizeView from './views/Resize';
import SortingListView from './views/SortingList';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={HomeView} />
      <Route path="sorting-list" component={SortingListView} />
      <Route path="resize" component={ResizeView} />
      <Route path="kanban" component={KanbanView} />
      <Route path="object-on-canvas" component={ObjectCanvasView} />
    </Route>
  </Router>,
  document.getElementById('root')
);
