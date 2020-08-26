import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { signIn } from '../common/auth'
import AuthRoute from './auth/AuthRoute';
import Home from '../pages/Home';
import User from '../common/user'
import Auth from '../pages/Auth';

const App = () => {
  const [user, setUser] = useState<User | null>(null)
  const authenticated = user != null;
  const login = (props: User) => setUser(signIn(props));
  //const logout = () => setUser(null);
  return (
    <Router>
      <Switch>
        {
          <AuthRoute
            authenticated={authenticated}
            exact path="/" component={Home}>
          </AuthRoute>

          /*<Route path="/login">
          <Login authenticated={authenticated} login={login} />
        </Route>
          */
        }
        <Auth authenticated={authenticated} login={login} />
      </Switch>
    </Router >
  )
}

export default App;
