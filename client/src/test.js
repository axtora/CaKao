import React from 'react';
import PropTypes from 'prop-types';

const test = ({api, signin, signup}) => {
  console.log('chk data', api, signin, signup);

  return (
    <div>
      test
    </div>
  )
}

test.proptypes = {
  api: PropTypes.func,
  signin: PropTypes.func,
  signup: PropTypes.func,
};

test.defaultProps = {
  api: () => console.warn('api is not defined'),
  signin: () => console.warn('signin is not defined'),
  signup: () => console.warn('signup is not defined'),
};

export default test;