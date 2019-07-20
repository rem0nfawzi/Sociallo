import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../auth/login';
import Register from '../auth/register';
import Dashboard from '../dashboard/dashboard';
import CreateProfile from '../profile/createProfile';
import EditProfile from '../profile/editProfile';
import Profiles from '../profiles/profiles';
import ProfileDetails from '../profile/profileDetails';
import Posts from '../post/posts';
import Post from '../post/post';
import NotFound from '../layout/NotFound';
import Alert from '../layout/alert';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
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
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
