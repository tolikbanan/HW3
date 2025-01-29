import styles from './styles.module.css'
const MovieList = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.movies.map((movie, index) => (
        <div key={index}>
          {`${index + 1}. ${movie}`}
          <div className={styles.buttonsWrapper}>
            <button className={styles.editButton} onClick={() => props.handleEditMovie(index)}>Edit</button>
            <button className={styles.deleteButton} onClick={() => props.handleDeleteMovie(index)}>Delete</button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;