/* eslint-disable react/prop-types */
import styles from './Container.module.scss'

export const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
