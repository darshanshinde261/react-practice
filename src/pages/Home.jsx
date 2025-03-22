import React from 'react'
import Button  from '../component/Button'

const Home = () => {
  return (
    <div className='max-w-sm border mx-auto bg-slate-50 flex flex-col p-4 h-[100vh] overflow-x-hidden '>
        <h1 className='font-bold mt-auto text-3xl pb-3'>Welcome to PopX</h1>
        <p className='text-gray-500  leading-[1.4] pb-7'> Lorem ipsum dolor sit amet sit amet<br></br> consectetur, adipisicing  elit.</p>
        <div className='flex flex-col gap-2'>
        <Button text='Create Account' color={'oklch(0.541 0.281 293.009)'} link={'/signup'} tcolor={'white'}></Button>
        <Button text='Already Registered? Login' color={'oklch(0.811 0.111 293.571)'} link={'/login'} tcolor={'black'}></Button>
        </div>
        
    </div>
  )
}

export default Home