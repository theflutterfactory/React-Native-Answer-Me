import 'react-native';
import React from 'react';
import SignIn from '../src/components/auth/signIn';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <SignIn />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
