// app/quotes/page.tsx
import QuotesClient from './QuotesClient'

interface APIRes { quotes: { quote:string; author:string }[] }

export default async function QuotesPage() {
  const res = await fetch('https://dummyjson.com/quotes')
  if (!res.ok) throw new Error('fetch sıkıntı')
  const { quotes }: APIRes = await res.json()
  return <QuotesClient serverQuotes={quotes} />
}