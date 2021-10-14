import styles from './myButton.module.css'

export default function MyButton({ children }) {
  return <button className={styles.button}>{children}</button>
}
