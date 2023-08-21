import styles from './Particle.module.scss'

export const Particle = () => (
    <div>
        {Array(20).fill('').map((_, key) => (
            <div key={key} className={styles.particle} style={{
                animationName: styles[`particle-animation-${key + 1}`]
            }} />
        ))}
    </div>
)