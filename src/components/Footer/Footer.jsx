import { constants } from './constants'
import { Container } from '../Container/Container'
import styles from './Footer.module.scss'

const { socials, subtext1, subtext2, subtext3, copy } = constants

export const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <Container>
                    <div className={styles.footerContent}>
                        <div className={styles.socialsContainer}>
                            <div className={styles.socials}>
                                {
                                    socials.map((itm, idx) => {
                                        return (
                                            <img key={idx} src={itm} alt='socials' />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.subtext}>
                            <p>{subtext1}</p>
                            <p>{subtext2}</p>
                            <p>{subtext3}</p>
                        </div>
                        <p className={styles.copy}>{copy}</p>
                    </div>
                </Container>
            </footer>

        </>
    )
}
