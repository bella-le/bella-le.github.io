import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Landing from './components/Landing';
import Invalid from './components/404';
import * as ROUTES from './constants/routes';

const CenterDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const App = () => (
  <CenterDiv>
    <Router>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path='/404' component={Invalid} />
        <Redirect to='/404' />
      </Switch>
    </Router>
  </CenterDiv>
);

export default App;
