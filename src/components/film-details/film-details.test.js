import React from 'react';
import renderer from 'react-test-renderer';

import {film, films} from '../../mocks-test/films-test.js';
import {user} from '../../mocks-test/user-test.js';

import FilmDetails from './film-details.jsx';

const activeTab = `overview`;

describe(`FilmDetailsComponent`, () => {
  it(`FilmDetailsComponentSnapshot`, () => {
    const tree = renderer
      .create(
          <FilmDetails
            film={film}
            films={films}
            user={user}
            authorizationStatus={`NO_AUTH`}
            activeTab={activeTab}
            renderTabs={() => {}}
            handleFilmClick={() => {}}
            handlePlayClick={() => {}}
            handleTypeSCreenChange={() => {}}
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
