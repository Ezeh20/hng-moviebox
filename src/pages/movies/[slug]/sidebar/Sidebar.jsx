import Logo from '../../../../assets/Logo-box.svg'
import logout from '../../../../assets/logout.svg'
import game from '../../../../assets/game.svg'
import styles from './Sidebar.module.scss'
import { constants } from './constant'

export const Sidebar = () => {
    return (
        <div className={styles.main}>
            <img src={Logo} alt='logo' className={styles.logo} />
            <div className={styles.routeLinks}>
                {
                    constants.map((itm) => {
                        const { id, img, text } = itm
                        return (
                            <div key={id} className={id === 1 ? `${styles.route} ${styles.routeAlt}` : `${styles.route}`}>
                                <img src={img} alt={text} />
                                <p className={styles.routeText}>{text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <img src={game} alt='game' className={styles.game} />
            <img src={logout} alt='logout' className={styles.logout} />
        </div>
    )
}
