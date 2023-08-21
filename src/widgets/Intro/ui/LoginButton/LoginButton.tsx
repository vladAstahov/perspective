import React from "react"
import styles from './LoginButton.module.scss'

export type LoginButtonProps = {
    className?: string
}

export const LoginButton = React.memo<LoginButtonProps>(({ className }) => {
    return <a href="#" className={`${className} ${styles.root}`}>
        LOG IN
    </a>
})