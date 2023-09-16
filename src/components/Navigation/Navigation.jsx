"use client"
import { useEffect, useState } from 'react'
import { Container } from '../Container/Container'
import logo from "../../assets/Logo.svg"
import search from "../../assets/search.svg"
import menu from "../../assets/Menu.svg"
import styles from "./Navigation.module.scss"

export const Navigation = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scroll
      ? `${styles.changeBg} ${styles.header}`
      : `${styles.header}`}
    >
      <Container>
        <nav className={styles.nav}>
          <div className={styles.lgi}>
            <img src={logo} alt='logo' />
            <p className={`${styles.text} ${styles.textAlt}`}>MovieBox</p>
          </div>
          <div className={styles.inputContainer}>
            <input type='text' placeholder='what do you want to watch?' className={styles.input} />
            <img src={search} alt='search' className={styles.searchIcon} />
          </div>
          <div className={styles.lgi}>
            <p className={styles.text}>Sign in</p>
            <img src={menu} alt='menu' />
          </div>
        </nav>
      </Container>
    </header>
  )
}
