import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLike, deletePost } from '../../store/actions/post';
import profilePic from '../../img/user.png';

const PostItem = ({
  post: { _id, text, name, user, likes, comments, date },
  auth,
  toggleLike,
  deletePost,
  showActions
}) => {
  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={profilePic} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Posted on {<Moment format='YYYY/MM/DD'>{date}</Moment>}
        </p>
        {showActions && (
          <Fragment>
            <button
              type='button'
              className='btn btn-light'
              onClick={e => toggleLike(_id)}
            >
              <i className='fas fa-thumbs-up' />
              {likes.length ? <span>{likes.length}</span> : null}
            </button>
            <Link to={`/post/${_id}`} className='btn btn-primary'>
              Discussion
              {comments.length > 0 && (
                <span className='comment-count'>{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                type='button'
                className='btn btn-danger'
                onClick={e => deletePost(_id)}
              >
                <i className='fas fa-times' />
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  { toggleLike, deletePost }
)(PostItem);
