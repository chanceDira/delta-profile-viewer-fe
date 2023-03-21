import CheckItem from '@/components/CheckItem'
import Navbar from '@/components/Navbar'
import TalentCard from '@/components/TalentCard'
import React from 'react'

const Dashboard = ()  => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className='flex flex-row min-h-screen '>
            <div className='w-1/4 border-r-2  '>
                <div className='mx-10 my-20'>

                <CheckItem name='All' />
                <CheckItem name='Names' />
                <CheckItem name='Countries' />
                <CheckItem name='Achievements' />
                <CheckItem name='Certificates' />
                </div>
            </div>
            <div className=' w-full px-40 py-20'>
                <TalentCard />
            </div>
        </div>
    </div>
  )
}

export default Dashboard