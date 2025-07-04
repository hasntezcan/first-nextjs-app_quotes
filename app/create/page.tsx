'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { addQuote } from '../../store/quoteSlice'
import styles from './create.module.scss'

export default function CreatePage() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = quote.trim(), a = author.trim()
    if (!q || !a) return
    dispatch(addQuote({ quote: q, author: a }))
    setAuthor('')
    setQuote('')
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}> Create a Quote </h1> 
      <Link href="/quotes" className={styles.navLink}>Browse</Link>

      <form onSubmit={onSubmit} className={styles.form}>
        <input
          placeholder="Your quote..."
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          className={styles.input}
        />
        <input
          placeholder="Author..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.buttonPrimary}>Publish</button>
      </form>
    </div>
  )
}