import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export const Footer = () => {
  return (
   <footer className='border-t'>
    <div className='flex-center wrapper flex-between flex flex-col p-5 gap-4 text-center sm:flex-row'>
      <Link href='/'><Image src="assets/images/logo.svg" alt="Logo" width={128} height={38} /></Link>
      <p>2023 Evently. All Rights reserved.</p>
    </div>
   </footer>
  )
}
