import { Route } from 'react-router-dom';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

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
    </div>
  );
}

export default App;
