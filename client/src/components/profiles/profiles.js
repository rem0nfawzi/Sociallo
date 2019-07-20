import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';
import { getProfiles } from '../../store/actions/profile';
import ProfileItem from './profileItem';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Developers</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' />
            Browse and connect with developers
          </p>
          <div className='profiles'>
            {profiles.length ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};
export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
