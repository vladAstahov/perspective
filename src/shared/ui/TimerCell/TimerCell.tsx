import React from 'react'
import styles from './TimerCell.module.scss'

export type TimerCellProps = {
    className?: string
    data: [string, string]
}

export const TimerCell = React.memo<TimerCellProps>(({ className, data }) => {
    return <div className={`${styles.root} ${className}`}>
        <span>{data[0]}</span>
        <div className={styles.divider} />
        <span>{data[1]}</span>
        <div>
            {Array(6).fill('').map((_, key) => (
                <div className={styles.particle} key={key} />
            ))}
        </div>
    </div>
})