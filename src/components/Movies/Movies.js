import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import Footer from '../Footer/Footer';

import './Movies.css';

import { getMovies } from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/filterMovies';

function Movies({ isDarkTheme, openBurgerMenu }) {

    // localStorage.clear();

  const isShortMovies = JSON.parse(localStorage.getItem('isShortMovies'));
  const [initialMovies, setInitialMovies] = useState([]);
  const [requestText, setRequestText] = useState(JSON.parse(localStorage.getItem('requestText')));
  const [isCheckedShortMovies, setIsCheckedShortMovies] = useState(isShortMovies === null ? false : isShortMovies);


  useEffect(() => {
    setInitialMovies(filterMovies())
  }, [isCheckedShortMovies]);


  const handleSubmit = () => {
    getMovies()
      .then((movies) => {
         localStorage.setItem('movies', JSON.stringify(movies));
         setInitialMovies(filterMovies());
      }).catch((err) => {
        console.log(err)
      });
  };


  if (!initialMovies) {
    return (
      <>
        <Header
          isDarkTheme={isDarkTheme}
          openBurgerMenu={openBurgerMenu}
        />
        <main>
          <SearchForm
            onHandleSubmit={handleSubmit}
            inputValue={requestText}
            setInputValue={setRequestText}
            isCheckedShortMovies={isCheckedShortMovies}
            setIsCheckedShortMovies={setIsCheckedShortMovies}
          />
        </main>
        <Footer/>
      </>
    );
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
          inputValue={requestText}
          setInputValue={setRequestText}
          isCheckedShortMovies={isCheckedShortMovies}
          setIsCheckedShortMovies={setIsCheckedShortMovies}
        />
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
