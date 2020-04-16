import React, { useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Todo from './mobxstore/store';


//import pages - routes - code splitting
const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "homeChunk" */ './pages/HomePage')
);
const DetailsPage = React.lazy(() =>
  import(/* webpackChunkName: "detailsChunk" */ './pages/DetailsPage')
);
const EditPage = React.lazy(() =>
  import(/* webpackChunkName: "editChunk" */ './pages/EditPage')
);



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
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
