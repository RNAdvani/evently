"use client"
import { SignedOut } from '@clerk/clerk-react'
import { SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
   <header className='w-full border-bottom'>
        <div className="wrapper flex items-center justify-between">
            <Link href={"/"} className='w-36'>
                <Image src={"/assets/images/logo.svg"} width={128} height={128} alt='logo' />
            </Link>

          <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

            <div className="flex w-32 justify-end gap-8">

                <SignedIn >
                  <UserButton afterSignOutUrl='/' />
                  <MobileNav />
                </SignedIn>

              <SignedOut>
                <Button asChild className='rounded-full bg-primary' size={'lg'} >
                  <Link href={"/sign-in"}>
                    Login
                </Link>
                </Button>
              </SignedOut>
            </div>
        </div>
   </header>
  )
}

export default Header