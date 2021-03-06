import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import ShowMore from './show-more';

configure({adapter: new Adapter()});

describe(`ShowMoreComponent`, () => {
  it(`Show more button click`, () => {
    const onShowMoreClick = jest.fn();

    const showMore = shallow(
        <ShowMore
          onShowMoreClick={onShowMoreClick}
        />
    );

    const buttonShowMore = showMore.find(`.catalog__button`);

    buttonShowMore.simulate(`click`);

    expect(onShowMoreClick).toBeCalled();
  });
});
