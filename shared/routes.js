import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import PostContainer from './container/PostContainer/PostContainer';
import PostDetailView from './container/PostDetailView/PostDetailView';
import Slides from './container/Slides/Slides';
import Sliddee from './container/Slides/Sliddee';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Slides} />
		<Route path="/slides/:slug" component={Sliddee}/>
  </Route>
);

export default routes;
