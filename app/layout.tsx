import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({ 
  subsets: ['latin'],
weight: [ "400", "500", "600", "700" ],
variable:'--font-poppins', })

export const metadata: Metadata = {
  title: 'AmazEvent',
  description: 'By That9jaboy3',
  icons:{
    icon:'/assets/images/logoo.jpeg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
       <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
   
  )
}
