import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export const Footer = () => {
  return (
   <footer className='border-t bg-[#5ce1e6]'>
    <div className='flex-center wrapper flex-between flex flex-col p-5 gap-4 text-center sm:flex-row'>
      <Link href='/'><Image src="/assets/images/logoo.jpeg" width={50} height={38} alt='AmazEvent Logo'/></Link>
      <p className='text-xs'>2023 That9jaboy3. All Rights reserved.</p>
    </div>
   </footer>
  )
}
