import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/navbar';
import Landing from './components/layout/landing';
import Login from './components/auth/login';
import Register from './components/auth/register';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './store/actions/auth';
import Dashboard from './components/dashboard/dashboard';
import CreateProfile from './components/profile/createProfile';
import EditProfile from './components/profile/editProfile';
import Profiles from './components/profiles/profiles';
import ProfileDetails from './components/profile/profileDetails';
import Posts from './components/post/posts';
import Post from './components/post/post';

// Redux
import { Provider } from 'react-redux';
import store from './store/store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/create-profile' component={CreateProfile} />
              <Route exact path='/edit-profile' component={EditProfile} />
              <Route exact path='/profiles' component={Profiles} />
              <Route exact path='/profile/:id' component={ProfileDetails} />
              <Route exact path='/posts' component={Posts} />
              <Route exact path='/post/:id' component={Post} />
            </Switch>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
