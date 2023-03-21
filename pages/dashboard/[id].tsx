import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'
import React from 'react'

const SingleTalent = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className=' float-left w-full ml-20 mt-10'>
            <Image
                src="/back.svg"
                width={40}
                height={40}
                alt="heroImage"
                className=""            />
            </div>
        <div className='flex flex-col items-center justify-center w-full '>
          
            <div className='flex flex-col items-center justify-center'>
                <div>
                <Image
                src="/profileHolder.svg"
                width={100}
                height={100}
                alt="heroImage"
                className=""            />
                </div>
                <div className=' text-primary-600 font-bold text-3xl '>John Doe</div>
            <div className=' text-secondary-600'>Full stack Developer</div>
            <div className=' text-primary-600 mt-4 w-1/2'>Am a qualified software engineer, with exprience in fullstack development, I can been working 
An ecommerce project which is really doing awesome in terms revenue and ads </div>
            </div>
            <div className=' flex flex-row'>
                <div>
                <Image
                src="/website.svg"
                width={30}
                height={30}
                alt="heroImage"
                className="cursor-pointer"            />
                </div>
                <div>
                <Image
                src="/github.svg"
                width={30}
                height={30}
                alt="heroImage"
                className="cursor-pointer"            />
                </div>
                <div>
                <Image
                src="/twitter.svg"
                width={30}
                height={30}
                alt="heroImage"
                className="cursor-pointer"            />
                </div>
                <div>
                <Image
                src="/linkedin.svg"
                width={30}
                height={30}
                alt="heroImage"
                className="cursor-pointer"            />
                </div>
            </div>
            <div className='mt-20 flex flex-col justify-center items-center'>
                <div className=' text-secondary-600 font-bold text-2xl mb-10'>
                Projects
                </div>

                <div className='mb-20 flex flex-wrap justify-center items-center w-10/12'>

                    <div className='m-6'>
                       <ProjectCard />
                    </div>

                    <div className='m-6'>
                       <ProjectCard />
                    </div>

                    <div className='m-6'>
                       <ProjectCard />
                    </div>

                    <div className='m-6'>
                       <ProjectCard />
                    </div>

                    <div className='m-6'>
                       <ProjectCard />
                    </div>



                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleTalent