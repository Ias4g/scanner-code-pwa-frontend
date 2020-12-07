import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import BookDetails from './pages/Book-details';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/book-details/:isbn">
          <BookDetails />
        </Route>
      </Switch>
    </Router>
  );
}
