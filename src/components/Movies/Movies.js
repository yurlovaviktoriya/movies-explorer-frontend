import { useRef, useEffect } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import SearchResponseBlock from '../SearchResponseBlock/SearchResponseBlock';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import Footer from '../Footer/Footer';

import './Movies.css';

import useMoviesFilter from '../../utils/useMoviesFilter';
import { useHeightCalculatorForMoviesList } from '../../utils/useHeightCalculatorForMoviesList'
import { getDataFromLocalStorage } from '../../utils/moveLocalStorageDataFunctions';

function Movies({ isDarkTheme, openBurgerMenu, isLoading, isDisableSearchBtn, onHandleSearchApiMovies,
                  onHandleSaveMovie, onHandleDeleteMovie, allMoviesRequestData,
                  setAllMoviesRequestData, searchResponse, setSearchResponse}) {

  const { searchQueryForAllMovies, isShortMoviesForAllMovies } = allMoviesRequestData;
  
  const moreBtn = useRef();
  const moviesListElement = useRef();
  
  const { moviesListHeight, areThereAnyMovies, setDataForCalculation,
           resetSettingsForCalculation, calculateHeight } = useHeightCalculatorForMoviesList();

  const { filteredMovies, notFoundMovies, enableFiltration } = useMoviesFilter({
        searchQueryKey: 'searchQueryForAllMovies',
        isShortMoviesKey: 'isShortMoviesForAllMovies'
      }, 'foundAmongAllMovies');
  
  const moviesToSearch = getDataFromLocalStorage('apiMovies') || [];
  const moviesToRender = getDataFromLocalStorage('foundAmongAllMovies') || [];

  let isDesktopAtMountingTime = document.body.clientWidth > 380;
  const timeOut = useRef(null);

  const monitorScreenWidth = () => {
    const screenWidth = document.body.clientWidth;
    const isCurrentDesktop = screenWidth > 380;
    if (isDesktopAtMountingTime !== isCurrentDesktop) {
      isDesktopAtMountingTime = !isDesktopAtMountingTime;
      clearTimeout(timeOut.current);
      const params = { isCurrentDesktop, isCurrentMobail: !isCurrentDesktop }
      timeOut.current = setTimeout(() => {resetSettingsForCalculation(params)}, 300);
    };
  };

  useEffect(() => {
    window.addEventListener('resize', monitorScreenWidth);
    return () => {
      window.removeEventListener('resize', monitorScreenWidth);
    };
  }, []);

  useEffect(() => {
    setDataForCalculation(document.body.clientWidth, moviesToRender.length);
    calculateHeight();
  },[filteredMovies]);

  
  const enableFiltrationAmongAllMovies = () => {
    enableFiltration(moviesToSearch);
  };

  const handleSubmit = () => {
    if (moviesToSearch.length === 0) {
      setSearchResponse('');
      onHandleSearchApiMovies(enableFiltration);
    } else {
       enableFiltration(moviesToSearch);
    };
  };
    

  const handleMoreBtnClick = () => {
    calculateHeight();
  }

  return (
    <>
      <Header
        isDarkTheme={isDarkTheme}
        openBurgerMenu={openBurgerMenu}
      />
      <main>
        <SearchForm
          isDisableSearchBtn={isDisableSearchBtn}
          requestText={{
            localStorageName: 'searchQueryForAllMovies',
            localStorageValue: searchQueryForAllMovies
          }}
          isShortMovies={{
            localStorageName: 'isShortMoviesForAllMovies',
            localStorageValue: isShortMoviesForAllMovies  
          }}
          setMoviesRequestData={setAllMoviesRequestData}
          onHandleSubmit={handleSubmit}
        />
        <Preloader
          isLoading={isLoading}
        />
        <SearchResponseBlock
          message={searchResponse || notFoundMovies}
        />
        <MoviesCardList
          moviesListElement={moviesListElement}
          moviesListHeight={moviesListHeight}
          isSaved={false}
          moviesToRender={moviesToRender}
          isChecked={isShortMoviesForAllMovies}
          enableFiltration={enableFiltrationAmongAllMovies}
          onHandleSaveMovie={onHandleSaveMovie}
          onHandleDeleteMovie={onHandleDeleteMovie}
        />
        <More
          moreBtn={moreBtn}
          onHandleClick={handleMoreBtnClick}
          areThereAnyMovies={areThereAnyMovies}
        />
      </main>
      <Footer/>
    </>
  );
}

export default Movies;
