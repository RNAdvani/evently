
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
          <div className="flex flex-col justify-center gap-8">
              <h1 className="h1-bold">
                Host, Connect and Celebrate:Your Events,  Our Platform
              </h1>
              <p className="p-regular-20 md:p-regular-24">
                Book and learn from 3000+ mentors in world-class companies with our global community
              </p>
              <Button asChild className='button w-full sm:w-fit' size={'lg'}>
                <Link href={"#events"} >
                    Explore
                </Link>
              </Button>
          </div>

          <Image src={"/assets/images/hero.png"} className='max-h-[70vh] w-full object-contain object-center 2xl:max-h-[50vh]' alt='hero' height={500} width={500}  />
        </div>
      </section>
      <section className='wrapper my-8 flex flex-col gap-8 md:gap-12' id="id">
          <h2 className="h2-bold">
            Trusted by <br />
            Thousands of Events 
          </h2>
          <div className="flex w-full flex-col gap-5 md:flex-row ">
                Search 
                CategoryFilter
          </div>
      </section>
    </>
  )
}

export default page