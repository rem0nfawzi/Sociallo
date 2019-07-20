import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/spinner';
import { getProfileById } from '../../store/actions/profile';
import ProfileTop from './profileTop';
import ProfileAbout from './profileAbout';

const ProfileDetails = ({
  match,
  getProfileById,
  profile: { profile, loading },
  auth
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn btn-light'>
            Back to Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}
          <div class='profile-grid my-1'>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  { getProfileById }
)(ProfileDetails);
