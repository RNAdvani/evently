import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from '../ui/separator'
import NavItems from './NavItems'

const MobileNav = () => {
  return (
   <nav className="md:hidden">
     <Sheet>
  <SheetTrigger>
    <Image src={"/assets/icons/menu.svg"} alt='menu' height={24} className='cursor-pointer' width={24} />
  </SheetTrigger>
  <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
    <Image src={"/assets/images/logo.svg"} alt='logo' height={38} width={128} />
    <Separator className='border border-gray-100'/>
    <NavItems />
  </SheetContent>
</Sheet>
   </nav>
  )
}

export default MobileNav