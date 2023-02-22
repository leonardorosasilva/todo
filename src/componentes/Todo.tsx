import styles from './Todo.module.css';
import { faStar, faEdit, faEraser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PropsTodo {
  id: number;
  infoTask: {
    task: any;
  };
  dateAddTask: Date;
  onDeleteTask: (id: number) => void;

}

export function Todo({
  id,
  infoTask,
  dateAddTask,
  onDeleteTask,
}: PropsTodo): JSX.Element {
  const AddDateTask = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(dateAddTask);

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.containerTask}>
      <label className={styles.infoTask} htmlFor="checkbox">
        {infoTask.task}
      </label>
      <div className={styles.tasks}>
        <input className={styles.checkbox} type="checkbox" name="" id="checkbox" />
        <hr />
        <nav>
          <ul>
            <li>
              <button>
                <FontAwesomeIcon
                  className={styles.favoriteTask}
                  title="Favoritar"
                  icon={faStar}
                  size="xl"
                />
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon title="Editar" icon={faEdit} size="xl" />
              </button>
            </li>

            <li>
              <button>
                <FontAwesomeIcon
                  onClick={handleDeleteTask}
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
