import React, { useEffect } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Todo from './mobxstore/store';

//normal import 
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import EditPage from './pages/EditPage';

//route level code splitting
// const HomePage = React.lazy(() =>
//   import(/* webpackChunkName: "homeChunk" */ './pages/HomePage')
// );
// /* 
//   As of the v4.6.0 release of webpack, there is native support for 
//   generating both prefetch and preload using magic comments

//   webpackPrefetch: true
// */
// const DetailsPage = React.lazy(() =>
//   import(/* webpackChunkName: "detailsChunk" */ './pages/DetailsPage')
// );
// const EditPage = React.lazy(() =>
//   import(/* webpackChunkName: "editChunk" */ './pages/EditPage')
// );



function App() {
  useEffect(() => {
    const todos = new Todo(); 
    console.log(todos);
  }, [])

  return (
    <Router>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/details/:id" component={DetailsPage} />
          <Route path="/edit/:id" component={EditPage} />
          <Route path="/*">
            <div style={{padding: 20, textAlign: 'center'}}>
              <h1>404 Page Not Found</h1>
            </div>
          </Route>
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
