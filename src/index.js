import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MainLayout from './layout/Main';
import SortingListView from './views/SortingList';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={SortingListView} />
    </Route>
  </Router>,
  document.getElementById('root')
);
