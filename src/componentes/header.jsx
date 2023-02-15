import { faMoon , faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './header.module.css'

export function Header(){
    return(
    <header >
        <div className={styles.containerPrincipalHeader}>
            <h2>Todo List</h2>
        </div>
        <nav className={styles.iconsDS}>
            <a href=''><FontAwesomeIcon icon={faMoon} size='2x  ' /></a>
            <a href=''><FontAwesomeIcon icon={faBars} size='2x'/></a>
        </nav>
    </header>
    );
}