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

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';

function App() {

  const [currentUser, setCurrentUser] = useState({name: '', email: '', _id: ''});
  const [isLogged, setIsLogged] = useState(false);

  const [burgerMenuClasses, setBurgerMenuClasses] = useState('burger-menu');

  const openBurgerMenu = () => {
    setBurgerMenuClasses('burger-menu burger-menu_opened');
  }

  const closeBurgerMenu = () => {
    setBurgerMenuClasses('burger-menu');
  }

  return (
    <CurrentUserContext.Provider value={{currentUser, isLogged}}>
      <div className="root">
        <Routes>
          <Route path='/signup' element={<Register/>} />
          <Route path='/signin' element={<Login/>} />
          <Route path='/' element={
            <Main
              isDarkTheme={true}
              openBurgerMenu={openBurgerMenu}
            />
          }/>
          <Route path='/movies' element={
            <ProtectedRoute
              component={Movies}
              isDarkTheme={false}
              openBurgerMenu={openBurgerMenu}
            />
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute
              component={SavedMovies}
              isDarkTheme={false}
              openBurgerMenu={openBurgerMenu}
            />
          } />
          <Route path='/profile' element={
            <ProtectedRoute
              component={Profile}
              openBurgerMenu={openBurgerMenu}
            />
          } />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
        <BurgerMenu
           burgerMenuClasses={burgerMenuClasses}
           closeBurgerMenu={closeBurgerMenu}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
