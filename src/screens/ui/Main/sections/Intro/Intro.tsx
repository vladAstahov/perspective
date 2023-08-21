"use client"

import React, { useEffect, useRef } from 'react'
import styles from './Intro.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { LoginButton, Particle, PlayButton, Timer } from '@/widgets'

export const Intro = () => {
    const sectionRef = useRef<HTMLSelectElement | null>(null)

    const mouseHandler = (e: MouseEvent) => {
        Object.assign(document.documentElement, {
            style: `
                --moveX: ${(e.clientX - window.innerWidth / 2) * 0.015}deg;
                --moveY: ${(e.clientY - window.innerHeight / 2) * 0.015}deg;
            `
        })
    }

    useEffect(() => {
        document.addEventListener('mousemove', mouseHandler)

        return () => {
            document.removeEventListener('mousemove', mouseHandler)
        }
    })

    return <section ref={sectionRef} className={styles.root}>
        <LazyLoadImage className={styles.background} src='/images/intro/background.png' />
        <div className={styles.shadow} />
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <LazyLoadImage 
                    className={styles.logo} 
                    src='images/logo.png' />    
                <LazyLoadImage
                    className={styles.lightSmoke} 
                    src='/images/intro/lightSmoke.png' />
                <p className={styles.description}>Первый Interlude <span>+</span> на клиенте Classic</p>
                <Timer className={styles.timer} />
                <LoginButton className={styles.login} />
            </div>
        </div>
        <PlayButton className={styles.playButton} />
        <LazyLoadImage 
            className={styles.leftBottomSmoke}
            style={{
                animationName: styles.smokeAnimation
            }}
            src='/images/intro/leftBottomSmoke.png' />
        <LazyLoadImage 
            className={styles.rightBottomSmoke}
            style={{
                animationName: styles.smokeAnimation
            }}
            src='/images/intro/rightBottomSmoke.png' />
        <LazyLoadImage 
            className={styles.leftTopSmoke}
            style={{
                animationName: styles.smokeAnimation
            }}
            src='/images/intro/leftTopSmoke.png' />
        <LazyLoadImage 
            className={styles.logoSmoke}
            src='/images/intro/logoSmoke.png' />
        <Particle />
    </section>
}