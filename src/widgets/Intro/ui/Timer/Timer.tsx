import React from 'react'
import { TimerCell } from '@/shared'
import styles from './Timer.module.scss'

export type TimerProps = {
    className?: string
}

export const Timer = React.memo<TimerProps>(({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <TimerCell data={['0', '2']} />
        <TimerCell data={['0', '4']} />
        <TimerCell data={['0', '4']} />
    </div>
})