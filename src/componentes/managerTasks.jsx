import styles from './managerTasks.module.css'

export function Tasks(){
    return(
        <div>
            <nav className={styles.manageTasks}>
                <ul>
                    <li>Todos</li>
                    <li>Completadas</li>
                    <li>Favoritos</li>
                </ul>
            </nav>
        </div>
    );
}