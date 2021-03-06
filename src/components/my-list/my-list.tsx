import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {AppRoute, FilmsListType} from './../../utils/const';

import {Operation as DataOperation} from './../../reducer/data/data';
import {getFilmsFavorite, getLoadingFilmsFavoriteStatus} from './../../reducer/data/selectors';

import FilmsList from '../films-list/films-list';
import UserProfile from '../user-profile/user-profile';
import Loading from '../loading/loading';

interface Props {
  filmsFavorite: Film[];
  user: UserMaximum;
  authorizationStatus: string;
  isLoadingFilmsFavorite: boolean;
  loadFilmsFavorite: () => void;
}

const SHOW_FILMS_CARD_COUNT_MORE_LIKE = 4;

class MyList extends React.PureComponent<Props, {}> {
  props: Props;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFilmsFavorite} = this.props;
    loadFilmsFavorite();
  }

  render() {
    const {
      isLoadingFilmsFavorite,
    } = this.props;

    if (isLoadingFilmsFavorite) {
      return <Loading />;
    }

    const {
      user,
      filmsFavorite,
      authorizationStatus
    } = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={`${AppRoute.MAIN}`} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list {isLoadingFilmsFavorite && `(идёт загрузка)`}</h1>

          <UserProfile
            user={user}
            authorizationStatus={authorizationStatus}
          />
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {isLoadingFilmsFavorite ?
              <p>Идёт загрузка...</p>
              : <FilmsList
                films={filmsFavorite}
                filmListType={FilmsListType.DEFAULT}
                showFilmCardCount={SHOW_FILMS_CARD_COUNT_MORE_LIKE}
                currentFilm={filmsFavorite[0]}
              />
            }
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={`${AppRoute.MAIN}`} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filmsFavorite: getFilmsFavorite(state),
    isLoadingFilmsFavorite: getLoadingFilmsFavoriteStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadFilmsFavorite() {
    dispatch(DataOperation.loadFilmsFavorite());
  }
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
