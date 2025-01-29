import React from 'react';
import styles from './styles.module.css'
const MovieInput = (props) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        value={props.movieName}
        onChange={(e) => props.setMovieName(e.target.value)}
        placeholder="Enter movie name"
      />
      <button className={styles.button} onClick={props.handleAddOrEditMovie}>
        {props.editingIndex !== null ? "Edit" : "Add"}
      </button>
      {props.editingIndex !== null &&
        <button className={styles.button} onClick={props.handleCancelEditing}>
        Cancel
      </button>}
    </div>
  );
};

export default MovieInput;