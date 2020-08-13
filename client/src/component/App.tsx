import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { signIn } from '../common/auth'
import AuthRoute from './AuthRoute';
import Home from '../pages/Home';
import User from '../common/user'
import LogoutButton from './LogoutButton';
import Login from '../pages/Login';

function App() {
  const [user, setUser] = useState<User | null>(null)
  const authenticated = user != null;
  const login = (props: User) => setUser(signIn(props));
  const logout = () => setUser(null);
  return (
    <Router>

      {authenticated ? (
        <LogoutButton logout={logout} />
      ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      <Switch>
        <Route
          path="/login"
          render={props => (
            <Login authenticated={authenticated} login={login} {...props} />
          )}
        />
        <AuthRoute
          authenticated={authenticated}
          path="/home"
          render={(props: any) => <Home {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
