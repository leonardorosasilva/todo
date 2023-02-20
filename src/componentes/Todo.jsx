import styles from './Todo.module.css'

import { faStar,faEdit, faEraser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Todo(props){
    const AddDateTask = new Intl.DateTimeFormat('pt-BR',{
        day:'2-digit',
        month:'long',
        year:'numeric'
    }).format(props.dateAddTask)

    


    return( 
        

        <div className={styles.containerTask}> 
            <label className={styles.infoTask} htmlFor="checkbox">{props.infoTask.task}</label>
            <div className={styles.tasks}>
                <input className={styles.checkbox} type="checkbox" name="" id="checkbox"/><hr />
                <nav>
                    <ul>
                        <li>
                            <FontAwesomeIcon title='Favoritar' icon={faStar} size='xl'/>
                        </li>
                        <li>
                            <FontAwesomeIcon title='Editar' icon={faEdit} size='xl' />
                        </li>
                        <li>
                            <FontAwesomeIcon title='Apagar' icon={faEraser} size='xl'/>
                        </li>
                    </ul>
                </nav>
            </div>
            <span className={styles.dateAdd}>
                <time dateTime={props.dateAddTask.dataTask}>
                    Adicionado no dia {AddDateTask}
                </time> 
            </span>
        </div>
    );
}
