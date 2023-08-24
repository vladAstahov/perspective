import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import styles from './Online.module.scss'

export type OnlineProps = {
    className?: string
}

export const Online = React.memo<OnlineProps>(({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <LazyLoadImage 
            className={styles.cross}
            src="images/intro/online/cross.svg" />
        <p className={styles.title}>ONLINE <br/> 365</p>
        <LazyLoadImage className={styles.background} src="images/intro/online/background.png" />
    </div>
})