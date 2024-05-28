import React from 'react'
import phone from '../images/Frame.svg'
import location from '../images/Location.svg'
import Navbar from './Navbar'


const HeaderNavbar = () => {
  return (
    <div style={{fontFamily: "OpenSans-Regular"}} >
        <div className='flex justify-between bg-[#2E3192] text-white pl-10 py-4 text-[13px]'>
            <div className='flex justify-between'>
            <p className='mr-5'>}</p>
            <p>Mon - Sat 8:00 17:30, Sunday - CLOSED</p>
            </div>

            <div className='flex'>
                <div className='flex mr-24'>
                <img src={phone} className='mr-5'/>
                <p>+654/4715-167</p>
                </div>

                <div className='flex mr-24'>
                    <p>allsmiles@qodeinteractive.com</p>
                </div>

                <div className='flex mr-24'>
                    <img src={location} className='mr-5'/>
                    <p>63 Wall St, New York, NY 10005</p>
                </div>
                
            </div>
            

        </div>

        <div>
            <Navbar/>
        </div>

    </div>
  )
}

export default HeaderNavbar