import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ErrorPage from '../ErrorPage/ErrorPage';

import './App.css';

function App() {

  const [burgerMenuClasses, setBurgerMenuClasses] = useState("burger-menu");

  const openBurgerMenu = () => {
    setBurgerMenuClasses("burger-menu burger-menu_opened");
  }

  const closeBurgerMenu = () => {
    setBurgerMenuClasses("burger-menu");
  }

  return (
    <div className="root">
      <Routes>
        <Route path='/signup' element={<Register/>} />
        <Route path='/signin' element={<Login/>} />
        <Route path='/' element={
          <Main
            isDarkTheme={true}
            isLogged={false}
            openBurgerMenu={openBurgerMenu}
          />
        }/>
        <Route path='/movies' element={
          <Movies
            isDarkTheme={false}
            isLogged={true}
            openBurgerMenu={openBurgerMenu}
          />
        }/>
        <Route path='/saved-movies' element={
          <SavedMovies
            isDarkTheme={false}
            isLogged={true}
            openBurgerMenu={openBurgerMenu}
          />
        } />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
      <BurgerMenu
         burgerMenuClasses={burgerMenuClasses}
         closeBurgerMenu={closeBurgerMenu}
      />
    </div>
  );
};

export default App;
