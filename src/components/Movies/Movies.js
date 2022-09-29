import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import Footer from '../Footer/Footer';

import './Movies.css';

import { initialMovies } from '../../initialMovies';

function Movies({ isDarkTheme, isLogged, openBurgerMenu }) {
  return (
    <>
      <Header
        isDarkTheme={isDarkTheme}
        isLogged={isLogged}
        openBurgerMenu={openBurgerMenu}
      />
      <main>
        <SearchForm/>
        <MoviesCardList
          isSaved={false}
          movies={initialMovies}
        />
        <More/>
      </main>
      <Footer/>
    </>
  );
}

export default Movies;
