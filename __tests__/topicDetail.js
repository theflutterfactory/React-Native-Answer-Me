import 'react-native';
import React from 'react';
import TopicDetail from '../src/components/topicDetail';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <TopicDetail />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
