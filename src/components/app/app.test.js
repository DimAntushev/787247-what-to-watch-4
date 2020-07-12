import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const films = [
  {
    name: `Хоббит: Пустошь Смауга`,
    picture: `img/pulp-fiction.jpg`,
    genre: `Adventure`,
    date: 2014
  },
  {
    name: `Интерстеллар`,
    picture: `img/pulp-fiction.jpg`,
    genre: `Adventure`,
    date: 2014
  },
  {
    name: `Спасти рядоого Райана`,
    picture: `img/pulp-fiction.jpg`,
    genre: `Adventure`,
    date: 2014
  },
  {
    name: `Хоббит: Пустошь Смауга`,
    picture: `img/pulp-fiction.jpg`,
    genre: `Adventure`,
    date: 2014
  },
  {
    name: `Власталин колец: Возвращение короля`,
    picture: `img/pulp-fiction.jpg`,
    genre: `Adventure`,
    date: 2014
  },
  {
    name: `Хоббит: Пустошь Смауга`,
    picture: `img/pulp-fiction.jpg`,
    genre: `Adventure`,
    date: 2014
  },
  {
    name: `Хоббит: Нежданное путешествие`,
    picture: `img/pulp-fiction.jpg`,
    genre: `Adventure`,
    date: 2014
  },
  {
    name: `Хоббит: Пустошь Смауга`,
    picture: `img/pulp-fiction.jpg`,
    genre: `Adventure`,
    date: 2014
  }
];

const film = {
  name: `Интерстеллар`,
  picture: `img/pictrue.jpg`,
  genre: `Adventure`,
  date: 2014
};

describe(`AppComponent`, () => {
  it(`AppComponentSnapshot`, () => {
    const tree = renderer
      .create(
          <App
            films={films}
            filmName={film.name}
            genre={film.genre}
            date={film.date}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
