'use client'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import { RootState } from '../../store'
import { Quote, removeQuote } from '../../store/quoteSlice'
import styles from './quotes.module.scss'

export default function QuotesClient({ serverQuotes }: { serverQuotes: Quote[] }) {
  const dispatch = useDispatch()
  const localQuotes = useSelector((s: RootState) => s.quotes.localQuotes)
  const [tab, setTab] = useState<'browse' | 'my'>('browse')
  const list = tab === 'browse' ? serverQuotes : localQuotes

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quotes</h1>
      <Link href="/create" className={styles.navLink}>
        Add new  </Link>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === 'browse' ? styles.active : ''}`}
          onClick={() => setTab('browse')}
        > Browse Quotes </button>
        <button
          className={`${styles.tab} ${tab === 'my' ? styles.active : ''}`}
          onClick={() => setTab('my')}
        > My Quotes </button>
      </div>

      {list.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No quotes to be shown</p> 
    ) : (
        <ul className={styles.list}>
          {list.map((q, i) => (
            <li key={i} className={styles.listItem}>
              <span className={styles.quoteText}>“{q.quote}”</span> — <span className={styles.author}>{q.author}</span>
              {tab === 'my' && (
                <button
                  onClick={() => dispatch(removeQuote(i))}
                  className={styles.removeBtn}
                  aria-label="Remove quote"
                > ✖ </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}