import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/profiles'>Developers</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <a href='#!' onClick={logout}>
          <i className='fas fa-sign-out-alt' />
          <span className='hide-sm'> Logout</span>
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Developers</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' /> Sociallo
        </Link>
      </h1>
      {!loading ? (isAuthenticated ? authLinks : guestLinks) : null}
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
