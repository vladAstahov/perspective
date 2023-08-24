"use client";

import React, { useCallback, useMemo, useRef, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import styles from './Menu.module.scss'
import { IconSocial } from "@/shared";

export type MenuProps = {
    className?: string
}

const data: {
    id: number,
    text: string
}[] = [
    {
        id: 0,
        text: 'Главная'
    },
    {
        id: 1,
        text: 'Новости'
    },
    {
        id: 2,
        text: 'Описание'
    },
    {
        id: 3,
        text: 'Начать игру'
    },
    {
        id: 4,
        text: 'Донат'
    },
    {
        id: 5,
        text: 'Рейтинг'
    },
]

export const Menu = React.memo<MenuProps>(({ className }) => {
    const [ active, setActive ] = useState<number>(0)
    const itemsRef = useRef<HTMLLIElement[]>([])

    const iconOffset = useMemo(() => itemsRef.current[active] ? itemsRef.current[active].offsetTop : 0, [active, itemsRef])
    const getItemClasses = useCallback(( id: number ) => {
        const classes = [
            styles.item
        ]

        if (id === active) {
            classes.push(styles.active)
        }

        return classes.join(' ')
    }, [active])

    return <div className={`${styles.root} ${className}`}>
        <LazyLoadImage 
            className={styles.icon}
            src="images/menu/icon.svg" 
            alt="icon" />
        <ul className={styles.list}>
            <LazyLoadImage 
            className={styles.pointer}
            style={{
                transform: `translateY(${iconOffset}px)`
            }}
            src="images/menu/pointer.svg"
            alt="pointer" />
            <div className={styles.line}/>
            {data.map(({ id, text }, key) => (
                <li 
                    // @ts-ignore
                    ref={el => itemsRef.current[id] = el}
                    key={key}
                    className={getItemClasses(id)}
                    onClick={() => setActive(id)}>
                    {text} 
                </li>
            ))}
        </ul>
        <div className={styles.bottom}>
            <div className={styles.socials}>
                <IconSocial icon="discord" href="#" />
                <IconSocial icon="telegram" href="#" />
            </div>
            <LazyLoadImage 
                className={styles.order}
                src="images/menu/order.png" 
                alt="order"/>
        </div>
    </div>
})