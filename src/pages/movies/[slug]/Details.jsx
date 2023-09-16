import star from '../../../assets/Star.svg'
import tick from '../../../assets/tick.svg'
import more from '../../../assets/more.svg'
import arrow from '../../../assets/arrow.svg'
import shows from '../../../assets/shows.svg'
import { useParams } from 'react-router'
import { Button } from '../../../components/Button/Button'
import { Video } from './video/Video'
import { Cast } from './cast/Cast'
import { Sidebar } from './sidebar/Sidebar'
import { useSwr } from '../../../hooks/useSwr/useSwr'
import styles from './Details.module.scss'

const Details = () => {
    const { id } = useParams()
    const { data } = useSwr(`https://api.themoviedb.org/3/movie/${id}?api_key=357938cf01cd0b7cc3f1de72870b3bd3`)

    const utc = new Date(data?.release_date).toUTCString()
    const vote = Number(data?.vote_average)
    const rated = data?.popularity.toFixed(0)

    return (
        <main className={styles.main}>
            <Sidebar />
            <section className={styles.details}>
                <Video slug={id} />
                <div className={styles.content}>
                    <div className={styles.mainContent}>
                        <div className={styles.titleSection}>
                            <div className={styles.info}>
                                <p data-testid="movie-title">{data?.original_title}</p>
                                <p data-testid="movie-release-date">{data && utc}</p>
                                <p data-testid="movie-runtime">{data?.runtime}</p>
                            </div>
                            <div className={styles.genres}>
                                {
                                    data?.genres?.map(itm => {
                                        const { name } = itm
                                        return (
                                            <p key={name} className={styles.name}>{name}</p>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className={styles.ratingSection}>
                            <div className={styles.star}>
                                <img src={star} alt='star' className={styles.img} />
                                <p className={styles.avg}>{vote.toFixed(1)}</p>
                            </div>
                            <p>|</p>
                            <p className={styles.count}>{data?.vote_count}</p>
                        </div>
                    </div>
                    <div className={styles.overview}>
                        <div className={styles.left}>
                            <p data-testid="movie-overview" className={styles.over}>{data?.overview}</p>
                            <Cast slug={id} />
                            <div className={styles.rated}>
                                <div className={styles.popular}>
                                    <Button className={styles.ratedBtn}>
                                        <p>Top rated movie #{rated}</p>
                                    </Button>
                                    <p className={styles.text}>Awards 9 nominations</p>
                                </div>
                                <img src={arrow} alt='arrow' className={styles.arrow} />
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.btns}>
                                <Button className={styles.btn}>
                                    <img src={tick} alt='tick' />
                                    <p>See Showtimes</p>
                                </Button>
                                <Button className={`${styles.btn} ${styles.btnAlt}`}>
                                    <img src={more} alt='more' />
                                    <p>See Showtimes</p>
                                </Button>
                            </div>
                            <div className={styles.imgContainer}>
                                <img src={shows} alt='shows' className={styles.shows} />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </main>
    )
}

export default Details