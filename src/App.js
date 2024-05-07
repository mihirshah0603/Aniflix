import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Player from './pages/Player';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';
import Aniflix from './pages/Aniflix';
import Subscribe from './pages/Subscribe';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tvshows" element={<TvShows />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/" element={<Aniflix />} />
        <Route exact path="/subscribe" element={<Subscribe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
