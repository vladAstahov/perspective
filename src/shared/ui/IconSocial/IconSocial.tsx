import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import styles from './IconSocial.module.scss'

export type IconSocialNames = 'discord' | 'telegram'

export type IconSocialProps = {
    className?: string
    icon: IconSocialNames
    href: string
}

const iconSocialMap: Record<IconSocialNames, {
    src: string,
    alt: string
}> = {
    discord: {
        src: 'images/menu/discord.png',
        alt: 'discord'
    }, 
    telegram: {
        src: 'images/menu/telegram.png',
        alt: 'telegram'
    }
}

export const IconSocial = React.memo<IconSocialProps>(({ className, icon, href }) => {
    return <a href={href} className={`${styles.root} ${className}`}>
        <LazyLoadImage className={styles.image} {...iconSocialMap[icon]}  />
    </a>
})