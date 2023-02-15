
import styles from './notification.module.css'

export function Notification(props){
    return(
        <div className={styles.containerNotification}>
            <section>
                <span>Olá, <strong>{props.user}</strong></span>
                <span>Atualmente você tem <strong>{props.pendencia} pendentes</strong> na sua lista</span>
                <span>Você está priorizando <strong>{props.priorizar} itens atualmente</strong></span>
            </section>
        </div>
    );
}