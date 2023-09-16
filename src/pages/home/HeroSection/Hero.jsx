/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Navigation from '../../../components/Navigation'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/Button/Button'
import { getImage } from '../../../helpers/getImage/getImage'
import indicator from '../../../assets/pointer.svg'
import play from '../../../assets/play.svg'
import imbd from '../../../assets/imbd.svg'
import tomato from '../../../assets/tomato.svg'
import { Container } from '../../../components/Container/Container'
import styles from './Hero.module.scss'
const pag = [1, 2, 3, 4, 5]

export const Hero = ({ data }) => {
  const [current, setCurrent] = useState(2)
  const result = data?.results
  const slides = result?.slice(0, 5)

  //move to next slide onClick
  const changeSlide = (idx) => {
    setCurrent(idx)
  }

  //autoplay { 3 seconds }
  useEffect(() => {
    let play = null;
    play = setTimeout(() => {
      nextSLide()
    }, 4500)
    return () => clearTimeout(play)
  })

  const nextSLide = () => {
    setCurrent(current === slides?.length - 1 ? 0 : current + 1)
  }

  return (
    <div className={styles.carousel}>
      <Navigation />
      {
        slides?.length > 0 ?
          <div className={styles.carouselContainer}>
            {slides.map((item, idx) => {
              const { id, backdrop_path, overview, vote_average, original_title } = item
              let imbdRating = vote_average * 10
              let tomatoRating = vote_average * 100 / 10

              return (
                <div key={id} className={idx === current
                  ? `${styles.hero} ${styles.heroActive}`
                  : `${styles.hero}`}>
                  <img
                    src={getImage.original(backdrop_path)}
                    alt="backdrop"
                    className={styles.backDrop}
                  />
                  <div className={styles.overlay}>
                    <Container>
                      <div className={styles.layout}>
                        <div className={styles.overlayContent}>
                          <p className={styles.title}>{original_title}</p>
                          <p className={styles.overview}>{overview}</p>
                          <div className={styles.rating}>
                            <div className={styles.icon}>
                              <img src={imbd} alt='imbd' />
                              <p>{imbdRating.toFixed(1)} / 100</p>
                            </div>
                            <div className={styles.icon}>
                              <img src={tomato} alt='tomato' />
                              <p>{tomatoRating.toFixed(1)}%</p>
                            </div>
                          </div>
                          <Link to={`/movies/${id}`} className={styles.link}>
                            <Button className={styles.button}>
                              <img src={play} alt='play' />
                              <p>Watch trailer</p>
                            </Button>
                          </Link>
                        </div>
                        <div className={styles.pagContainer}>
                          {
                            pag.map((itm, idx) => {
                              return (
                                <div key={itm} className={current === idx ? `${styles.numAlt} ${styles.num} ` : `${styles.num}`}
                                  onClick={() => changeSlide(idx)}>
                                  {current === idx ? <img src={indicator} alt='indicator' className={styles.indicator} /> : undefined}
                                  <p>{itm}</p>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    </Container>

                  </div>

                </div>
              )
            })}
          </div>
          : ""
      }
    </div >
  )
}
