// react
import {useState} from 'react'

// components
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
// styles
import './styles/global.css'

export interface ITask {
  id: string;
  title: string;
  isChecked: boolean
}

export const App  = () => {

  const [tasks, setTasks] = useState<ITask[]>([])

  function createNewTask (taskTitle: string) {
    setTasks( [
      ...tasks, {
        id: crypto.randomUUID(),
        title: taskTitle,
        isChecked: false,
      }
    ] )
  }

  function deleteTaskById(taskId: string) {
   const newTaskList = tasks.filter((task) => {
      return task.id !== taskId
    })
    setTasks(newTaskList)
  }

  function taskCompletedById(taskId: string) {
    
    const newTasks = tasks.map((task) => {

      if(task.id === taskId) {
        return {
          ...task,
          isChecked: !task.isChecked,
        }
      }
      return task
    })
    setTasks(newTasks)

  }

  return (
    <>
     <Header onCreateTask={createNewTask} />
     <Tasks tasks={tasks} onDeleted={deleteTaskById} onCompleted={taskCompletedById} />
    </>
  )
}