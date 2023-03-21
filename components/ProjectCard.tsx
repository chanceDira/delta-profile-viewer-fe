import Image from 'next/image'
import React from 'react'

const ProjectCard = () => {
  return (
    <div>
    <div>
    <Image
src="/projectHolder.svg"
width={300}
height={300}
alt="heroImage"
className="cursor-pointer"            />
    </div>
    <div className='p-2 text-primary-600 text-xl font-bold border-l-4 border-primary-100'>
            Project name
    </div>
    <div className='bg-primary-600 text-white flex flex-row justify-between items-center p-3'>
        <div className='cursor-pointer'>
            View project
        </div>
        <div className='cursor-pointer'>
        <Image
src="/camera.svg"
width={20}
height={20}
alt="heroImage"
className="cursor-pointer"            />
        </div>
    </div>
</div>
  )
}

export default ProjectCard