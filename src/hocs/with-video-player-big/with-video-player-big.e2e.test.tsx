import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import {withVideoPlayerBig} from './with-video-player-big';

configure({adapter: new Adapter()});

const MockComponent = () => {
  return <div />;
};
const MockComponentWrapped = withVideoPlayerBig(MockComponent);

describe(`Tests HOC with-video-player`, () => {
  it(`Test HOC with-video-player`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.state().isPlaying).toEqual(false);
  });
});
