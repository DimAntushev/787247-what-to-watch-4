import {GENRE_DEFAULT} from './../../utils/const.js';
import {createSelector} from 'reselect';
import {NameSpace} from './../name-space.js';

const getLoadingStatus = (state) => {
  return state[NameSpace.DATA].isLoading;
};

const getLoadingCommentStatus = (state) => {
  return state[NameSpace.DATA].isLoadingComment;
};

const getLoadingFilmsFavoriteStatus = (state) => {
  return state[NameSpace.DATA].isLoadingFilmsFavorite;
};

const getErrorLoadingComment = (state) => {
  return state[NameSpace.DATA].isErrorLoadingComment;
};

const getErrorStatus = (state) => {
  return state[NameSpace.DATA].isError;
};

const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

const getFilmsFavorite = (state) => {
  return state[NameSpace.DATA].filmsFavorite;
};

const getFilmPromo = (state) => {
  return state[NameSpace.DATA].filmPromo;
};

const getFilmById = (state, id) => {
  const films = state[NameSpace.DATA].films;

  return films.find((film) => film.id === Number(id));
};

const getFilmActive = (state) => {
  return state[NameSpace.DATA].filmActive;
};

const getComments = (state) => {
  return state[NameSpace.DATA].comments;
};

const getGenre = (state) => {
  return state[NameSpace.DATA].currentGenre;
};

const getFilmsByGenre = createSelector(
    [getFilms, getGenre],
    (films, currentGenre) => {
      if (films) {
        return currentGenre === GENRE_DEFAULT ?
          films :
          films.filter((film) => film.genre === currentGenre);
      }

      return null;
    }
);

export {
  getLoadingStatus,
  getLoadingCommentStatus,
  getErrorLoadingComment,
  getLoadingFilmsFavoriteStatus,
  getErrorStatus,
  getFilms,
  getFilmsFavorite,
  getFilmById,
  getFilmActive,
  getComments,
  getFilmsByGenre,
  getFilmPromo
};
