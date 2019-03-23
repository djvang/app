import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';

import HomePage from './pages/Home'
import PostsPage from './pages/Posts'
import PostPage from './pages/Post'
import UsersPage from './pages/Users'
import PhotosPage from './pages/Photos'
import TodosPage from './pages/Todos'
import AlbumsPage from './pages/Albums'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import store from './store';
import { Provider } from 'react-redux';

// loads the Icon plugin
UIkit.use(Icons);
 
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            
            <Route exact path="/posts" component={PostsPage} />
            <Route exact path="/posts/:id" component={PostPage} />

            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/photos" component={PhotosPage} />
            <Route exact path="/todos" component={TodosPage} />
            <Route exact path="/albums" component={AlbumsPage} />
          </div>
        </Router>
      </Provider>
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
