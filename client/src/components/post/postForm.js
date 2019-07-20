import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addPost } from '../../store/actions/post';

const PostForm = ({ addPost, isAuthenticated }) => {
  const [post, setPost] = useState({
    title: '',
    text: ''
  });
  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  return !isAuthenticated ? (
    <Redirect to='/login' />
  ) : (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ title: post.title, text: post.text });
          setPost({ title: '', text: '' });
        }}
      >
        <input
          type='text'
          name='title'
          value={post.title}
          onChange={handleChange}
          id='title-in'
          placeholder='Post Title'
        />
        <textarea
          name='text'
          cols='30'
          rows='5'
          value={post.text}
          onChange={handleChange}
          placeholder='Post Content'
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
