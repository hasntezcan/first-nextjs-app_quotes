// app/page.tsx
import { redirect } from 'next/navigation'

export default function HomePage() {
  //direk listelemeye yönlendir
  redirect('/quotes')
}