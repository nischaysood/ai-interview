import React from 'react'
import dayjs from 'dayjs'

import { getRandomInterviewCover } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './ui/button';
import { Link } from 'lucide-react';
import DisplayTechIcons from './ui/DisplayTechIcons';

const Interviewcard = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback|null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(feedback?.createdAt||createdAt||Date.now()).format("MMM DD, YYYY"); 

  return ( 
    <div className='card-border w-[360px] max-sm:w-full min-h-96'>
      <div className='card-interview'>
        <div>
          <div className='absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600'>
            <p className='bage-text'>
              {normalizedType}
            </p>
           </div> 
          <Image src={getRandomInterviewCover()} alt="cover" height={200} width={200} className='animate-fadeIn max-sm:hidden'  />
          <h3 className='mt-5 capitalize'>
            {role} interview 

          </h3>
          <div className='flex flex-row gap-10 mt -3 justify-center'>
            <div className='flex flex-row gap-2'>
              <Image src="/calendar.svg" alt="calendar" height={22} width={22} />
              <p>
                {formattedDate}
              </p>
            <div className='flex flex-row gap-2 items-center '>
                
              <Image src="/star.svg" alt="star" height={22} width={22} />
                <p>
                  {feedback?.totalScore||"---"}/100
                </p>

            </div>
            </div>
            

          </div> 
          <p className='line-clamp-2 mt-5'> 
              {feedback?.finalAssessment || "you havent taken the interview yet. take it now to improve your skils"}

            </p>
          <div className='flex flex-row justify-between'>
            <DisplayTechIcons techStack={techstack} />
            <Button className='btn-primary'>
              view interview
              <Link 
              href={
                feedback
                  ? `/interview/${interviewId}/feedback`
                  : `/interview/${interviewId}`
              }>
              {feedback ? "Check Feedback" : "View Interview"}
               </Link> 
            </Button>
          </div>
          </div>
          
      </div>
    </div>
  )
}

export default Interviewcard