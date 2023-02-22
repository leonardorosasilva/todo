import { FormEvent, useState } from 'react';
import styles from './App.module.css';

import { Header } from './componentes/header';
import { Notification } from './componentes/notification';
import { Todo } from './componentes/Todo';

interface Task {
  id: number;
  nameTask: string;
  dataTask: Date;
}

export function App(): JSX.Element {
  const [addTask, setAddTask] = useState<Task[]>([]);
  const [pendingTask, setPendingTask] = useState<number>(0);
  const [newTaskText, setNewTaskText] = useState<string>('');


  function handleUserCreateNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newTaskText) return;

    const newTask: Task = {
      id: Math.max(...addTask.map(task => task.id), 0) + 1,
      nameTask: newTaskText,
      dataTask: new Date(),
    };

    setAddTask([...addTask, newTask]);
    setPendingTask((numberValuePending) => numberValuePending +1)
    setNewTaskText('');
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
        <Notification user="USER" pendencia={pendingTask} priorizar={() => onFavotiteTask} />

        <section className={styles.search}>
          <form onSubmit={handleUserCreateNewTask}>
            <textarea
              name=""
              placeholder="Digite para adicionar..."
              id=""
              cols={30}
              rows={10}
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
            />
            <input type="submit" value="Adicionar" />
          </form>
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
