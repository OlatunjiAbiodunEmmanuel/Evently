import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

export const Header = () => {
  return (
    <header className='w-full border-b sticky top-0 bg-[#5ce1e6] z-50'>
        <div className='wrapper flex items-center justify-between'>
            <Link href='/' className='w-36'>
                <Image src='/assets/images/logoo.jpeg' width={50} height={38} alt='AmazEvent Logo'/> 
            </Link>
            <main className='flex'>
            <SignedIn>
                <nav className='md:flex-between hidden w-full max-w-xs'>
                <NavItems />
                </nav>
              </SignedIn>
            <div className='flex w-32 justify-end gap-3'>
              <SignedIn>
                <UserButton afterSignOutUrl='/'/>
                <MobileNav />
              </SignedIn>
            <SignedOut>
              <Button asChild className='rounded-full' size='lg'>
                <Link href='/sign-in'>Login</Link>
              </Button>
            </SignedOut>
            </div>
            </main>
        </div>
    </header>
  )
}
