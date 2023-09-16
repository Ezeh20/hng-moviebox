"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Video.module.scss'

export const Video = ({ slug }) => {
    const [video, setVideo] = useState()

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${slug}/videos?api_key=357938cf01cd0b7cc3f1de72870b3bd3`)
            setVideo(data.results[0])
        }
        fetch()
    }, [slug])
    

    return (
        <div className={styles.video}>
            {
                video ?
                    video?.key.length > 0 ?
                        <iframe key={video?.id} width="100%" height="100%" src={`https://www.youtube.com/embed/${video?.key}?autoplay=1`} frameBorder="0" allow="autoplay"></iframe>
                        : <p>No media to play</p>
                    : 'loading'
            }
        </div>
    )

}
