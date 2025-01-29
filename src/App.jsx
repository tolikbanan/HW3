import { useState } from 'react'
import './App.css'
import MovieInput from './components/MovieInput/MovieInput.jsx';
import MovieList from './components/MovieList/MovieList.jsx';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddOrEditMovie = () => {
    if (movieName.trim() === "") return;
    if (editingIndex !== null) {
      const updatedMovies = [...movies];
      updatedMovies[editingIndex] = movieName;
      setMovies(updatedMovies);
      setEditingIndex(null);
    } else {
      setMovies([...movies, movieName]);
    }
    setMovieName("");
  };

  const handleDeleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const handleEditMovie = (index) => {
    setMovieName(movies[index]);
    setEditingIndex(index);
  };

  const handleCancelEditing = () => {
    setEditingIndex(null)
    setMovieName("");
  }

  return (
    <div className="container">
      <h1>Movie Tracker</h1>
    <MovieInput
      movieName={movieName}
      setMovieName={setMovieName}
      handleAddOrEditMovie={handleAddOrEditMovie}
      editingIndex={editingIndex}
      handleCancelEditing={handleCancelEditing}
    />
      <MovieList movies={movies} handleEditMovie={handleEditMovie}  handleDeleteMovie={handleDeleteMovie} />
    </div>
  );
}
