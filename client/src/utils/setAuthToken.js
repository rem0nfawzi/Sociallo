import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-hash-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-hash-token'];
  }
};

export default setAuthToken;
