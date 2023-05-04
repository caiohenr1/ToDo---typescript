import { TaskList } from '../TaskList'
import styles from '../Tasks/Tasks.module.css'

import { ITask } from '../../App'

interface TaskProps {
  tasks: ITask[],
  onDeleted: (taskId: string) => void,
  onCompleted: (taskId: string) => void
}


export const Tasks = ( { tasks, onDeleted, onCompleted } : TaskProps) => {
  // contador
  const taskQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.isChecked).length


  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskQuantity}</span>
        </div>
        <div>
          <p className={styles.text_purple}>Concluídas</p>
          <span>{completedTasks} de {taskQuantity}</span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => {
          return <TaskList  
            key={task.id} 
            taskInfo={task} 
            onDeleted={onDeleted}
            onCompleted={onCompleted}
                  
          />
        })}
      </div>
    </section>
  )
}