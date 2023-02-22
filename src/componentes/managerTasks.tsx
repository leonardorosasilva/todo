import styles from './managerTasks.module.css'

export function Tasks(){
    return(
        <div>
            <nav className={styles.manageTasks}>
                <ul>
                    <a href="">
                        <li>
                            <img src="https://raw.githubusercontent.com/tailwindlabs/heroicons/60bcd8e611308b3b8aa4d9fccc0599a02dca2112/src/24/solid/archive-box-x-mark.svg" alt='Excluir tarefas'/>
                        </li>
                    </a>
                    <a href="">
                        <li>Todos</li>
                    </a>
                    <a href="">
                        <li>Completadas</li>
                    </a>
                    <a href="">
                        <li>Favoritos</li>
                    </a>
                </ul>
            </nav>
        </div>
    );
}