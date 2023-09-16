/* eslint-disable react/prop-types */
import styles from './Button.module.scss'

export const Button = ({ children, className, ...props }) => {
    return (
        <div className={`${styles.btn} ${className}`} {...props}>
            {children}
        </div>
    )
}
