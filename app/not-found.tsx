import { FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link'
import Header from '@/components/Header'
import styles from '../styles/not-found.module.css'


import React from 'react'

function NotFoundPage() {
    return (
        <Header>
            <div className={styles.error}>
                <h1>
                    <FaExclamationTriangle /> 404
                </h1>
                <h4>Sorry, there is nothing here</h4>
                <Link href='/'>Go Back</Link>
            </div>
        </Header>
    )
}

export default NotFoundPage