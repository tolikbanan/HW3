import React from "react";
import styles from "./styles.module.css";
import LikeDislikeButtons from "../LikeDislikeButtons/LikeDislikeButtons"; 

const MovieList = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.movies.map((movie, index) => (
        <div key={index}>
          {`${index + 1}. ${movie.name}`}
          <div className={styles.buttonsWrapper}>
            <input type="checkbox" onChange={() => props.toggleWatched(index)} checked={movie.watched} />
            <button className={styles.editButton} onClick={() => props.handleEditMovie(index)}>Edit</button>
            <button className={styles.deleteButton} onClick={() => props.handleDeleteMovie(index)}>Delete</button>
          </div>

          {movie.watched && (
            <LikeDislikeButtons
              likeStatus={movie.likeStatus}
              onLike={() => props.onToggleLike(index, "like")}
              onDislike={() => props.onToggleLike(index, "dislike")}
              dislikeIcon={props.dislikeIcon}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;