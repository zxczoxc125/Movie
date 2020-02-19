import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GlobalStyle from 'styles/global';
import { Home, Around, Detail } from 'pages/index';

const App = () => {
  const { isOpen } = useSelector(state => state.overlay);

  return (
    <>
      <GlobalStyle isOpen={isOpen} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/around">
            <Around />
          </Route>
          <Route
            exact
            path="/detail/:id"
            render={({ match }) => (
              <Detail key={match.params.id} match={match} />
            )}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
