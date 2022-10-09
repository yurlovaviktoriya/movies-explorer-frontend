import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProfilePage from '../ProfilePage/ProfilePage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ErrorPage from '../ErrorPage/ErrorPage';
import ProtectedRoute from '../ProtectedRoute';

import './App.css';

import { failAutologinMessage, failLoginMessage, successRegisterMessage, failRegisterMessage,
        successUpdateUserInfo, failUpdateUserInfo, failMoviesSearch } from '../../constants/messagesToUser';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { register, login, logout, getProfileInfo, editProfileInfo,
        getSavedMovies, saveMovie, deleteMovie } from '../../utils/mainApi';
import { getMovies } from '../../utils/moviesApi';
import { validateApiMovies } from '../../utils/validateApiMovie';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../../utils/moveLocalStorageDataFunctions';

import { getCurrentUserState, getAllMoviesRequestData,
         getUserMoviesRequestData } from '../../utils/savedStateGettingFunctions';

function App() {

  const location = useLocation();
  const history = useNavigate();

  const [currentUser, setCurrentUser] = useState(getCurrentUserState);
  const [isLogged, setIsLogged] = useState(getDataFromLocalStorage('isLogged'));

  const [allMoviesRequestData, setAllMoviesRequestData] = useState(getAllMoviesRequestData);
  const [userMoviesRequestData, setUserMoviesRequestData] = useState(getUserMoviesRequestData);
  
  const [serverMessage, setServerMessage] = useState('');
  const [searchResponse, setSearchResponse] = useState('');

  const [burgerMenuClasses, setBurgerMenuClasses] = useState('burger-menu');
  const [isLoading, setIsLoading] = useState(false);
  const [cardStateSwitch, setCardStateSwitch] = useState(false); // ещё подумать!!!


  useEffect(() => {
    if (isLogged && (location.pathname === '/signup' || location.pathname === '/signin' )) {
      history('/')
    };

    getProfileInfo()
      .then((currentUserInfo) => {
        setCurrentUser({
          name: currentUserInfo.name,
          email: currentUserInfo.email
        });
      }).catch(err => {
      console.log(err);
      });
  }, []);

  const openBurgerMenu = () => {
    setBurgerMenuClasses('burger-menu burger-menu_opened');
  };

  const closeBurgerMenu = () => {
    setBurgerMenuClasses('burger-menu');
  };

  const autoLogin = ({ email, password }) => {
    login({email, password})
      .then((currentUserInfo) => {
        setDataToLocalStorage('userMovies', []);
        setDataToLocalStorage('foundAmongUserMovies', []);
        history('/movies');
        setDataToLocalStorage('isLogged', 'true');
        setIsLogged(true);
        setCurrentUser({
          name: currentUserInfo.name,
          email: currentUserInfo.email
        });
      }).catch((err) => {
        setServerMessage(`${failAutologinMessage} ${err}`)
      });
  };

  const handleRegisterSubmit = ({ name, email, password }) => {
    setIsLoading(true);

    register({ name, email, password })
      .then(() => {
        setServerMessage(successRegisterMessage);
        setTimeout(() => autoLogin({ email, password }), 3000);
      }).catch((err) => {
        setServerMessage(`${failRegisterMessage} ${err}`)
      }).finally(() => {
        setIsLoading(false);
      });
  };
  
  const handleExitClick = () => {
    logout()
      .then(() => {
        localStorage.clear();
        setIsLogged(false);
        setAllMoviesRequestData({
         searchQueryForAllMovies: '',
         isShortMoviesForAllMovies: false
        });
        setUserMoviesRequestData({
         searchQueryForUserMovies: '',
         isShortMoviesForUserMovies: false
        });
      }).catch((err) => {
        console.log('failed logout', err);
    });
  };

  const getInitialMovies = () => {
    getSavedMovies()
      .then((savedMovies) => {
        setDataToLocalStorage('userMovies', savedMovies);
        setDataToLocalStorage('foundAmongUserMovies', savedMovies);
      }).catch((err) => {
        console.log(err);
    });
  };

  const handleLoginSubmit = ({ email, password }) => {
    setIsLoading(true);

    login({ email, password })
      .then((currentUserInfo) => {
        setDataToLocalStorage('isLogged', 'true');
        setIsLogged(true);
        setCurrentUser({
          name: currentUserInfo.name,
          email: currentUserInfo.email
        });
        getInitialMovies();
        history('/movies');
      }).catch((err) => {
        setServerMessage(`${failLoginMessage} ${err}`);
      }).finally(() => {
        setIsLoading(false);
      });
  };
  
  const handleUpdateProfileInfo = ({ name, email }, setIsActualData)=> {
    editProfileInfo({ name, email })
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email
        });
        setServerMessage(successUpdateUserInfo);
        setIsActualData(false);
      }).catch((err) => {
        setServerMessage(`${failUpdateUserInfo} ${err}`);
      });
  };
  
  const handleSearchApiMovies = (enableFiltration) => {
      
    setIsLoading(true);
    
    getMovies()
      .then((movies) => {
        const validMovies = validateApiMovies(movies);
        setDataToLocalStorage('apiMovies', validMovies);
        enableFiltration(validMovies);
      }).catch(() => {
        setSearchResponse(failMoviesSearch);
      }).finally(() => {
        setIsLoading(false); 
    });
  };

  const handleSaveMovie = (id) => {
    const movie = getDataFromLocalStorage('apiMovies').find(m => m.id === id);

    saveMovie(movie)
      .then((savedMovie) => {
        const userMovies = getDataFromLocalStorage('userMovies');
        setDataToLocalStorage('userMovies', [...userMovies, savedMovie]);
        const foundAmongUserMovies = getDataFromLocalStorage('foundAmongUserMovies');
        setDataToLocalStorage('foundAmongUserMovies', [...foundAmongUserMovies, savedMovie]);
        setCardStateSwitch(state => !state);
      }).catch((err) => {
        console.log(err);
    });
  };
  
  const handleDeleteMovie = (id) => {
    const userMovies = getDataFromLocalStorage('userMovies');
    const foundAmongUserMovies = getDataFromLocalStorage('foundAmongUserMovies');
    const movie = userMovies.find(m => m.movieId === id);

    deleteMovie(movie._id)
      .then(() => {
        setDataToLocalStorage('userMovies', userMovies.filter((c) => c._id !== movie._id));
        setDataToLocalStorage('foundAmongUserMovies', foundAmongUserMovies.filter((c) => c.movieId !== id));
        setCardStateSwitch(state => !state);
      }).catch((err) => {
        console.log(err);
    });
  };
  
  return (
    <CurrentUserContext.Provider value={{currentUser, isLogged}}>
      <div className="root">
        <Routes>
          <Route path='/signup' element={
            <Register
              isLoading={isLoading}
              onRegister={handleRegisterSubmit}
              serverMessage={serverMessage}
              setServerMessage={setServerMessage}
            />
          } />
          <Route path='/signin' element={
            <Login
              isLoading={isLoading}
              onLogin={handleLoginSubmit}
              serverMessage={serverMessage}
              setServerMessage={setServerMessage}
            />
          } />
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
              isLoading={isLoading}
              onHandleSearchApiMovies={handleSearchApiMovies}
              onHandleSaveMovie={handleSaveMovie}
              onHandleDeleteMovie={handleDeleteMovie}
              allMoviesRequestData={allMoviesRequestData}
              setAllMoviesRequestData={setAllMoviesRequestData}
              userMoviesRequestData={userMoviesRequestData}
              searchResponse={searchResponse}
              setSearchResponse={setSearchResponse}
            />
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute
              component={SavedMovies}
              isDarkTheme={false}
              openBurgerMenu={openBurgerMenu}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              userMoviesRequestData={userMoviesRequestData}
              setUserMoviesRequestData={setUserMoviesRequestData}
              onHandleDeleteMovie={handleDeleteMovie}
              serverMessage={serverMessage}
            />
          } />
          <Route path='/profile' element={
            <ProtectedRoute
              component={ProfilePage}
              openBurgerMenu={openBurgerMenu}
              onHandleExitClick={handleExitClick}
              onHandleUpdateProfileInfo={handleUpdateProfileInfo}
              serverMessage={serverMessage}
              setServerMessage={setServerMessage}
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
