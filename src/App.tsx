import { FormEvent, useState } from 'react';
import styles from './App.module.css';

import { Header } from './componentes/header';
import { Tasks } from './componentes/managerTasks';
import { Notification } from './componentes/notification';
import { Todo } from './componentes/Todo';

interface Task {
  id: number;
  nameTask: string;
  dataTask: Date;
}

export function App() {
  const [addTask, setAddTask] = useState<Task[]>([]);
  const [pendingTask, setPendingTask] = useState<number>(0)

  function handleUserCreateNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Pegue o texto digitado no campo de texto
    const newTaskText = e.currentTarget.querySelector('textarea')?.value;

    if (!newTaskText) return;

    // Crie um novo objeto de tarefa com um ID exclusivo
    const newTask = {
      id: Math.max(...addTask.map(task => task.id), 0) + 1,
      nameTask: newTaskText,
      dataTask: new Date(),
    };

    // Adicione a nova tarefa ao array de tarefas existente
    setAddTask([...addTask, newTask]);

    setPendingTask((numberValuePending) => numberValuePending +1)

    // Limpe o campo de texto
    e.currentTarget.querySelector('textarea')!.value = '';
  }

  function deleteTask(id: number) {
    const taskWithoutDeletedOne = addTask.filter(task => task.id !== id);
    setAddTask(taskWithoutDeletedOne);

    setPendingTask((numberValuePending) => numberValuePending - 1)
  }

  return (
    <div>
      <Header />
      <main className={styles.infoUser}>
        <h1>TO-DO LIST</h1>
        <Notification user="USER" pendencia={pendingTask} priorizar={0} />

        <section className={styles.search}>
          <form onSubmit={handleUserCreateNewTask}>
            <textarea name="" placeholder="Digite para adicionar..." id="" cols={30} rows={10}></textarea>
            <input type="submit" value="Adicionar" />
          </form>
        </section>

        <section>
          <Tasks />
        </section>

        <section className={styles.todoContainer}>
          {addTask.map(taskn => (
            <Todo
              infoTask={taskn.nameTask}
              dateAddTask={taskn.dataTask}
              key={taskn.id}
              onDeleteTask={() => deleteTask(taskn.id)}
              id={taskn.id}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
