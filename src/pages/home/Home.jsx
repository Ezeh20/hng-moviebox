"use client"
import { Hero } from './HeroSection/Hero'
import Featured from './FeaturedSection'
import { Footer } from '../../components/Footer/Footer'
import { useSwr } from '../../hooks/useSwr/useSwr'
import styles from './Home.module.scss'

export default function Home() {
  const { data, error } = useSwr(`https://api.themoviedb.org/3/movie/top_rated?api_key=357938cf01cd0b7cc3f1de72870b3bd3`)

  if (error) {
    return (
      <div>
        <p>Something went wrong</p>
      </div>
    )
  }
  
  return (
    <div className={styles.home}>
      <Hero data={data} />
      <Featured data={data} />
      <Footer />
    </div>
  )
}
