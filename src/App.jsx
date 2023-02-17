import styles from './App.module.css'

import { Header } from './componentes/header'
import { Tasks } from './componentes/managerTasks'
import { Notification } from './componentes/notification'
import { Todo } from './componentes/Todo'

export function App(){
  return(
  <div>
    <Header/>
    <main className={styles.infoUser}>
      <h1>TO-DO LIST</h1>
      <Notification
        user='USER'
        pendencia='0'
        priorizar='0'
      />
      <section className={styles.search}>
        <textarea name="" placeholder='Digite para adicionar...' id="" cols="30" rows="10"></textarea> 
        <button>Adicionar</button>
      </section>
      <section>
         <Tasks/>
      </section>
      <section className={styles.todoContainer}>
          <Todo
            infoTask='Task 1'  
          />
          <Todo 
            infoTask='Task 2'
          />
          <Todo 
            infoTask='Task 3'
          />
      </section>
    </main>
  </div>
  )

}