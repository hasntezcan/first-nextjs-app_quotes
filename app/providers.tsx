'use client'
import { ReactNode, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { addQuote } from '../store/quoteSlice'

interface Props { children: ReactNode }

export default function ReduxProvider({ children }: Props) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    //Localdan gelenleri al, store a gönder
    const saved = localStorage.getItem('myQuotes')
    if (saved) {
      const arr = JSON.parse(saved) as Array<{ quote: string; author: string }>
      arr.forEach((q) => store.dispatch(addQuote(q)))
    }

    //Her store değiştiğinde tekrar kaydet
    const unsubscribe = store.subscribe(() => {
      const { localQuotes } = store.getState().quotes
      localStorage.setItem('myQuotes', JSON.stringify(localQuotes))
    })

    setLoaded(true)
    return () => unsubscribe()
  }, [])
  // tüm app içeriğini Redux ile sar
  return <Provider store={store}>{children}</Provider>
}