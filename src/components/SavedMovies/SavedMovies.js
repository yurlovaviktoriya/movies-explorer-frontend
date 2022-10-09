import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import SearchResponseBlock from '../SearchResponseBlock/SearchResponseBlock';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import './SavedMovies.css';

import useMoviesFilter from '../../utils/useMoviesFilter';
import { getDataFromLocalStorage } from '../../utils/moveLocalStorageDataFunctions';

function SavedMovies({ isLoading, setIsLoading, isDarkTheme, openBurgerMenu, userMoviesRequestData,
              setUserMoviesRequestData, onHandleDeleteMovie, searchResponse, setSearchResponse }) {

  const moviesToSearch = getDataFromLocalStorage('userMovies') || [];
  const moviesToRender = getDataFromLocalStorage('foundAmongUserMovies') || [];

  const { searchQueryForUserMovies, isShortMoviesForUserMovies } = userMoviesRequestData;
  
  const { enableFiltration, notFoundMovies } = useMoviesFilter({
        searchQueryKey: 'searchQueryForUserMovies',
        isShortMoviesKey: 'isShortMoviesForUserMovies'
      }, 'foundAmongUserMovies');
    
  const enableFiltrationAmongUserMovies = () => {
    enableFiltration(moviesToSearch);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    enableFiltration(moviesToSearch);
    setIsLoading(false);
  };

  return (
    <>
      <Header
        isDarkTheme={isDarkTheme}
        openBurgerMenu={openBurgerMenu}
      />
      <main>
        <SearchForm
          onHandleSubmit={handleSubmit}
          requestText={{
            localStorageName: 'searchQueryForUserMovies',
            localStorageValue: searchQueryForUserMovies
          }}
          isShortMovies={{
            localStorageName: 'isShortMoviesForUserMovies',
            localStorageValue: isShortMoviesForUserMovies
          }}
          setMoviesRequestData={setUserMoviesRequestData}
        />
        <Preloader
          isLoading={isLoading}
        />
        <SearchResponseBlock
          message={notFoundMovies}
          searchResponse={searchResponse}
        />
        <MoviesCardList
          isSaved={true}
          moviesToRender={moviesToRender}
          onHandleDeleteMovie={onHandleDeleteMovie}
          enableFiltration={enableFiltrationAmongUserMovies}
          isChecked={isShortMoviesForUserMovies}
        />
      </main>
      <Footer/>
    </>
  );
}

export default SavedMovies;
