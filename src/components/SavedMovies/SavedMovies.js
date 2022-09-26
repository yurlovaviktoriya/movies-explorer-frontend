import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import './SavedMovies.css';

import { initialMovies } from '../../initialMovies';

function SavedMovies({ isDarkTheme, isLogged, openBurgerMenu }) {

  const savedMovies = initialMovies.filter(function(item) {
    return item.isLiked === true;
  });

  return (
    <>
      <Header
        isDarkTheme={isDarkTheme}
        isLogged={isLogged}
        openBurgerMenu={openBurgerMenu}
      />
      <SearchForm/>
      <MoviesCardList
        isSaved={true}
        movies={savedMovies}
      />
      <Footer/>
    </>
  );
}

export default SavedMovies;
