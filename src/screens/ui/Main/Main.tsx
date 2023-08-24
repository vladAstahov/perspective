import React from "react"
import { Menu } from "@/widgets/Menu/ui/Menu"
import { Intro } from "./sections"
import styles from './Main.module.scss'

export const Main = () => {
    return <main className={styles.root}>
        <Menu className={styles.menu} />
        <Intro />
    </main>
}