import { useState } from "react";
import { faStar, faEdit, faEraser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Todo.module.css';

interface PropsTodo {
  id:number
  infoTask:string
  dateAddTask:Date
  onDeleteTask: (id: number) => void
  onFavoriteTask(): void
}

export function Todo({
  id,
  infoTask,
  dateAddTask,
  onDeleteTask,
  onFavoriteTask
}: PropsTodo): JSX.Element {
  const AddDateTask = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(dateAddTask);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleFavoriteTask() {
    setIsFavorite(!isFavorite);
    onFavoriteTask();
  }

  return (
    <div className={styles.containerTask}>
      <label className={styles.infoTask} htmlFor="checkbox">
        {infoTask}
      </label>
      <div className={styles.tasks}>
        <input className={styles.checkbox} type="checkbox" name="" id="checkbox" />
        <hr />
        <nav>
          <ul>
            {/* <li>
              <button onClick={handleFavoriteTask}>
                <FontAwesomeIcon
                  className={`${styles.favoriteTask} ${isFavorite ? styles.favorite : ''}`}
                  title="Favoritar"
                  icon={faStar}
                  size="xl"
                />
              </button>
            </li> */}

            <li>
              <button onClick={handleDeleteTask}>
                <FontAwesomeIcon
                  className={styles.clearTask}
                  title="Apagar"
                  icon={faEraser}
                  size="xl"
                />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <span className={styles.dateAdd}>
        <time dateTime={dateAddTask}>Adicionado no dia {AddDateTask}</time>
      </span>
    </div>
  );
}
