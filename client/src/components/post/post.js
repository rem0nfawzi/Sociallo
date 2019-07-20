import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Spinner from '../layout/spinner';
import { getPost } from '../../store/actions/post';
import PostItem from './postItem';
import CommentForm from './commentForm';
import CommentItem from './commentItem';

const Post = ({ getPost, post: { post, loading }, match, isAuthenticated }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);
  return !isAuthenticated ? (
    <Redirect to='/login' />
  ) : loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/posts' className='btn'>
        Back to Posts
      </Link>
      <PostItem showActions={false} post={post} />
      <CommentForm postId={post._id} />
      <div className='comments'>
        {post.comments.map(comment => {
          return (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post._id}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    post: state.post,
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(
  mapStateToProps,
  { getPost }
)(Post);
