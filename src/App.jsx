import styles from './App.module.css'

import { Header } from './componentes/header'
import { Tasks } from './componentes/managerTasks'
import { Notification } from './componentes/notification'

export function App(){
  return(
  <div>
    <Header/>
    <main className={styles.containerTodo}>
      <h3>TO-DO LIST</h3>
      <Notification
        user='USER'
        pendencia='0'
        priorizar='0'
      />
      <section>
         <Tasks/>
      </section>
    </main>
  </div>
  )

}