import styles from './EmptyTasks.module.css'
import Clipboard from '../../assets/Clipboard.svg'

export const EmptyTasks = () => {
  return (
    <section className={styles.empty}>
      
         <img src={Clipboard} alt="" /> 
      
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </section>
  )
}