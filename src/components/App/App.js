import { Route } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

import './App.css';

function App() {
  return (
    <div className="root">
      <Route path='/movies'>
        <Movies/>
      </Route>
      <Route path='/saved-movies'>
        <SavedMovies/>
      </Route>
      <Route path='/profile'>
        <Profile/>
      </Route>
      <Route path='/signup'>
        <Register/>
      </Route>
      <Route path='/signin'>
        <Login/>
      </Route>
      <Route path='/'>
        <Main/>
      </Route>
    </div>
  );
}

export default App;
