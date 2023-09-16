/* eslint-disable react/prop-types */
import { Container } from '../../../components/Container/Container'
import { Cards } from '../../../components/Cards/Cards'
import styles from './Featured.module.scss'
export const Featured = ({ data }) => {
  const info = data?.results.slice(0, 10)

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.featured}>Featured Movie</h2>
          <p className={styles.see}>See more</p>
        </div>
        <div className={styles.card}>
          {
            info?.map((itm) => {
              return (
                <Cards key={itm.id} itm={itm} />
              )
            })
          }
        </div>
      </Container>
    </section>

  )
}
