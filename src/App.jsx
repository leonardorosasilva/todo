import { useState } from 'react'
import styles from './App.module.css'

import { Header } from './componentes/header'
import { Tasks } from './componentes/managerTasks'
import { Notification } from './componentes/notification'
import { Todo } from './componentes/Todo'

//Todo string: { nomeTag }
//content notification: { user , pendencia, priorizar}
//DateAdd: Date

//Iteração, sempre utilizando o map

//Estado


export function App(){

  // 1° recebe o valor 2° altera o valor
  const [addTask,setTask] = useState([
    { id:1,
      nameTask:{
        task: 'Exercicios Físicos'
      },
      dataTask: new Date('2023-02-19 21:00:00')},
   
     { id:2,
      nameTask:{
        task: 'Arrumar a cama'
      },
      dataTask: new Date('2023-02-20 22:00:00')},
    ]);

    
    //sempre que ação é disparada pelo usuario pode colocar no nome da função handle
function handleUserCreateNewTask(e) {
    e.preventDefault()


  // Crie um novo objeto de tarefa com um ID exclusivo
  const newTask = {
  // ... copia tudo que vem antes

    id: Math.max(...addTask.map(task => task.id)) + 1,
    nameTask: {
      task: 'Nova Tarefa'
    },
    dataTask: new Date('2023-05-17 20:20:00')
  };

  // Adicione a nova tarefa ao array de tarefas existente
  setTask(addTask.concat(newTask));
};

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
      {/* No formulario onClick é onSubmit, fora é normal */}

        <form onSubmit={handleUserCreateNewTask}>
          
          <textarea name="" placeholder='Digite para adicionar...' id="" cols="30" rows="10"></textarea> 
          <input type="submit" value="Adicionar" />
        </form>
      </section>

      <section>
         <Tasks/>
      </section>

      <section className={styles.todoContainer}>
        {addTask.map( taskn =>{
          return(
            <Todo
              infoTask={taskn.nameTask}
              dateAddTask={taskn.dataTask}
            />
          )
        })}
      </section>
    </main>
  </div>
  )

}