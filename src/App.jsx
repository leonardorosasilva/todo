import styles from './App.module.css'

import { Header } from './componentes/header'
import { Tasks } from './componentes/managerTasks'
import { Notification } from './componentes/notification'
import { Todo } from './componentes/Todo'

//Todo string: { nomeTag }
//content notification: { user , pendencia, priorizar}
//DateAdd: Date

//Iteração, sempre utilizando o map

const doTasks = [
   { id:1,
    nameTask:{
      task: 'Arrumar a casa'
    },
    dataTask: new Date('2023-02-19 21:00:00')},
 
   { id:2,
    nameTask:{
      task: 'Arrumar a cama'
    },
    dataTask: new Date('2023-02-26 22:00:00')},

    {id:3,
    nameTask:{
      task: 'Ler um livro'
    },
    dataTask: new Date('2023-02-28 15:00:00')}

];

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
        {doTasks.map( todo =>{
          return(
            <Todo
              infoTask={todo.nameTask}
              dateAddTask={todo.dataTask}
            />
          )
        })}
      </section>
    </main>
  </div>
  )

}