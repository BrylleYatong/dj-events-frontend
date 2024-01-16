import Link from "next/link";
import styles from '../styles/Nav.module.css'


import React from 'react'

function Nav() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">DJ Events</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/my_events'>My Events</Link>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav