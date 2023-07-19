import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'We Codes',
  description: 'We Codes is a Platform Where Anyone Can Learn Coding , How to be professional in writing code , coder , we codes, Learn Coding ',
  
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      
      <body className={inter.className}>
     {< Navbar />}
      
        {children}</body>
    </html>
    </>
  )
}
