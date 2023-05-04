import TodoLogo from '../../assets/todo-logo.svg'
import { AiOutlinePlusCircle} from 'react-icons/ai'

import styles from './Header.module.css'
import { ChangeEvent, useState } from 'react'

interface Props {
  onCreateTask: (taskTitle: string) => void
}

export const Header = ( { onCreateTask }: Props) => {
  const [title,  setTitle] = useState('')

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }
  function handleSubmit (event: FormEvent) {
    event.preventDefault()
    onCreateTask(title)
    setTitle('')
  }
  return (
    <header className={styles.header}>
      <img src={TodoLogo} alt="Logo ToDo" />
      <form 
        className={styles.newTaskForm}
        onSubmit={handleSubmit}>
        <input 
          placeholder='Adicione uma nova tarefa'
          onChange={onChangeTitle}
          value={title}  
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}