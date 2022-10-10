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

import { SERVER_ERROR, FAIL_AUTOLOGIN_MESSAGE, FAIL_LOGIN_MESSAGE, SUCCESS_REGISTER_MESSAGE, FAIL_REGISTER_MESSAGE,
        SUCCESS_UPDATE_USER_INFO, FAIL_UPDATE_USER_INFO, FAIL_MOVIES_SEARCH } from '../../constants/messagesToUser';

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
  const [isDisableSearchBtn, setIsDisableSearchBtn] = useState(false);


  useEffect(() => {
    const isAuthPage = location.pathname === '/signup' || location.pathname === '/signin'

    if (isLogged && isAuthPage) {
      history('/');
    } else if (isLogged && !isAuthPage) {
      getProfileInfo()
        .then((currentUserInfo) => {
          setCurrentUser({
            name: currentUserInfo.name,
            email: currentUserInfo.email
          });
          setDataToLocalStorage('currentUser', {
            name: currentUserInfo.name,
            email: currentUserInfo.email
          });
        }).catch((statusCode) => {
          checkAuthorization(statusCode);
        });
    };
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
        setDataToLocalStorage('currentUser', {
          name: currentUserInfo.name,
          email: currentUserInfo.email
        });
      }).catch((statusCode) => {
        setServerMessage(`${FAIL_AUTOLOGIN_MESSAGE} ${statusCode}`)
      });
  }

  const handleRegisterSubmit = ({ name, email, password }) => {
    setIsLoading(true);

    register({ name, email, password })
      .then(() => {
        setServerMessage(SUCCESS_REGISTER_MESSAGE);
        setTimeout(() => autoLogin({ email, password }), 3000);
      }).catch((statusCode) => {
        setServerMessage(`${FAIL_REGISTER_MESSAGE} ${statusCode}`)
      }).finally(() => {
        setIsLoading(false);
      });
  };
  
  const getInitialMovies = () => {
    getSavedMovies()
      .then((savedMovies) => {
        setDataToLocalStorage('userMovies', savedMovies);
        setDataToLocalStorage('foundAmongUserMovies', savedMovies);
      }).catch((statusCode) => {
        checkAuthorization(statusCode)
        console.log(`${SERVER_ERROR} ${statusCode}`);
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
        setDataToLocalStorage('currentUser', {
           name: currentUserInfo.name,
           email: currentUserInfo.email
        });
        getInitialMovies();
        history('/movies');
      }).catch((statusCode) => {
        setServerMessage(`${FAIL_LOGIN_MESSAGE} ${statusCode}`);
      }).finally(() => {
        setIsLoading(false);
      });
  };
  
  const handleUpdateProfileInfo = ({ name, email }, setIsActualData)=> {
    setIsLoading(true);  
      
    editProfileInfo({ name, email })
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email
        });
        setDataToLocalStorage('currentUser', {
          name: res.name,
          email: res.email
        });
        setServerMessage(SUCCESS_UPDATE_USER_INFO);
        setIsActualData(false);
      }).catch((statusCode) => {
        checkAuthorization(statusCode);
        setServerMessage(`${FAIL_UPDATE_USER_INFO} ${statusCode}`);
      }).finally(() => {
        setIsLoading(false);
      })
  };
  
  const handleSearchApiMovies = (enableFiltration) => {
    setIsLoading(true);
    
    getMovies()
      .then((movies) => {
        const validMovies = validateApiMovies(movies);
        setDataToLocalStorage('apiMovies', validMovies);
        enableFiltration(validMovies);
      }).catch(() => {
        setSearchResponse(FAIL_MOVIES_SEARCH);
      }).finally(() => {
        setIsLoading(false); 
    });
  };

  const handleSaveMovie = (id) => {
    setIsDisableSearchBtn(true);
    
    const movie = getDataFromLocalStorage('apiMovies').find(m => m.id === id);

    saveMovie(movie)
      .then((savedMovie) => {
        const userMovies = getDataFromLocalStorage('userMovies');
        setDataToLocalStorage('userMovies', [...userMovies, savedMovie]);
        const foundAmongUserMovies = getDataFromLocalStorage('foundAmongUserMovies');
        setDataToLocalStorage('foundAmongUserMovies', [...foundAmongUserMovies, savedMovie]);
      }).catch((statusCode) => {
        checkAuthorization(statusCode);
        console.log(`${SERVER_ERROR} ${statusCode}`);
      }).finally(() => {
        setIsDisableSearchBtn(false);
      });
  };
  
  const handleDeleteMovie = (id) => {
    setIsDisableSearchBtn(true);
      
    const userMovies = getDataFromLocalStorage('userMovies');
    const foundAmongUserMovies = getDataFromLocalStorage('foundAmongUserMovies');
    const movie = userMovies.find(m => m.movieId === id);
    
    deleteMovie(movie._id)
      .then(() => {
        setDataToLocalStorage('userMovies', userMovies.filter((c) => c._id !== movie._id));
        setDataToLocalStorage('foundAmongUserMovies', foundAmongUserMovies.filter((c) => c.movieId !== id));
      }).catch((statusCode) => {
        checkAuthorization(statusCode)
        console.log(`${SERVER_ERROR} ${statusCode}`);
    }).finally(() => {
        setIsDisableSearchBtn(false);
    });
  };

  const handleExitClick = () => {
    logout()
      .then(() => {
        clearData();
      }).catch((statusCode) => {
        console.log(`${SERVER_ERROR} ${statusCode}`);
    });
  };
  
  const resetUserMoviesRequestData = () => {
    setUserMoviesRequestData({});
  };

  const clearData = () => {
    localStorage.clear();
    setIsLogged(false);
    setCurrentUser({});
    setAllMoviesRequestData({});
    setUserMoviesRequestData({});

  };

  const checkAuthorization = (statusCode) => {
    if (statusCode === 401) {
      clearData();
      history('/')
    };
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
              isDisableSearchBtn={isDisableSearchBtn}
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
              isDisableSearchBtn={isDisableSearchBtn}
              setIsLoading={setIsLoading}
              userMoviesRequestData={userMoviesRequestData}
              setUserMoviesRequestData={setUserMoviesRequestData}
              onHandleDeleteMovie={handleDeleteMovie}
              serverMessage={serverMessage}
              resetUserMoviesRequestData={resetUserMoviesRequestData}
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
              isLoading={isLoading}
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
