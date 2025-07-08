import React from 'react'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { dummyInterviews } from '../../../constants'
import Interviewcard from '../../../components/Interviewcard'

const page = () => {
  return (
    <>
        <section className='card-cta'>
        <div className='flex flex-col gap-8 max-wlg'>
          <h2>
            AI platform that helps you preparing for mock interviews and feedback
          </h2>


          <p className='text-lg '>
            practice real interviews and get instant feedback
          </p>

          <Button asChild className='btn-primary max-sm:w-full'>

            <Link href ="/interview">
            Start an interview
            </Link>

          </Button>


        </div>
        <Image src="/robot.png" alt="robo" height={400} width={600} className='animate-fadeIn max-sm:hidden' />
        </section>
        <section className='flex flex-col gap-8 mt-8'>
          <h2>your interviews</h2>  



          <div className='interviews-section'>
            {dummyInterviews.map((interview) => (

              <Interviewcard {...interview} key={interview.id} />

            ))}

          </div>
        </section>


        <section className='flex flex-col gap-8 mt-8'>
          <h2>take interview</h2>

          <div className='interviews-section'>
            {dummyInterviews.map((interview) => (

              <Interviewcard {...interview} key={interview.id} />

            ))}
            {/* <p>
              you haven't taken any interview yet 
            </p> */}
          </div>

        </section>

    </>
  )
}

export default page