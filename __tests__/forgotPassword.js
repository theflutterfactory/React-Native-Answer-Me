import 'react-native';
import React from 'react';
import ForgotPassword from '../src/components/auth/forgotPassword';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <ForgotPassword />
  );
});
