// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import ReduxProvider from './providers'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}