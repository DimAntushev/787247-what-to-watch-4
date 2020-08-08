import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import {NameSpace} from '../../reducer/name-space.js';
import {film} from './../../mocks-test/films-test.js';
import {user} from './../../mocks-test/user-test.js';

import AddReview from './add-review.jsx';

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    isLoadingComment: false
  }
});

describe(`AddReviewComponent`, () => {
  it(`AddReviewComponentSnapshot with NO_AUTH user`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <AddReview
              film={film}
              user={user}
              authorizationStatus={`NO_AUTH`}
              onTypeScreenChange={() => {}}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`AddReviewComponentSnapshot with AUTH user`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <AddReview
              film={film}
              user={user}
              authorizationStatus={`AUTH`}
              onTypeScreenChange={() => {}}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});