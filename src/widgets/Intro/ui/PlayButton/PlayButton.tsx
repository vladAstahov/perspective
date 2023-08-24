import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import styles from './PlayButton.module.scss'

export type PlayButtonProps = {
    className?: string
}

export const PlayButton = React.memo<PlayButtonProps>(({ className }) => {
    return <div
        className={`${styles.root} ${className}`}>
        <button className={styles.button} onClick={() => console.log('click')} />

        <LazyLoadImage
            className={styles.background}
            src="images/intro/playButton/background.svg" />      
        <LazyLoadImage
            className={styles.light}
            src="images/intro/playButton/light.svg" />
        <LazyLoadImage 
            className={styles.icon}
            src="images/intro/playButton/icon.svg" /> 
    </div>
})