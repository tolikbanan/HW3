import { useState } from 'react'
import './App.css'

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

  return (
    <div className="app">
      <h1>Movie Tracker</h1>
      <div>
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          placeholder="Enter movie name"
        />
        <button onClick={handleAddOrEditMovie}>
          {editingIndex !== null ? "Edit" : "Add"}
        </button>
      </div>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie}
            <button onClick={() => handleEditMovie(index)}>Edit</button>
            <button onClick={() => handleDeleteMovie(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <style>
        {`
          .app {
            text-align: center;
            font-family: Arial, sans-serif;
          }
          input {
            margin: 5px;
            padding: 5px;
          }
          button {
            margin: 5px;
            padding: 5px;
            cursor: pointer;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin: 10px 0;
          }
        `}
      </style>
    </div>
  );
}
