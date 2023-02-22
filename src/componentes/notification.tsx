
import styles from './notification.module.css'

interface NotificationProps{
    user:string
    pendencia:number
    priorizar:number
}

export function Notification({user,pendencia,priorizar}:NotificationProps){
    return(
        <div className={styles.containerNotification}>
            <section>
                <span>Olá, <strong>{user}</strong></span>
                <span>Atualmente você tem <strong>{pendencia} pendentes</strong> na sua lista</span>
                <span>Você está priorizando <strong>{priorizar} itens atualmente</strong></span>
            </section>
        </div>
    );
}