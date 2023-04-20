import React, { Fragment, useState } from 'react'
import { ChevronDown } from 'react-feather'
import "./Header.css"

const Header = () => {

    // toggle the dropdown 
    const [MenuDropDown, setMenuDropDown] = useState(false)



    return (
        <Fragment>
            <div className="container d-flex align-items-center justify-content-between" style={{height:"100px"}}>
                <div className="headerName d-flex align-items-center justify-content-start gap-4">
                    <h2 className='text-white'>Superlist</h2>
                    <div className="headerMenuSelect position-relative us-none" >
                        <span className='cursor-p headerDropdownBtn fs-5' onClick={() => { setMenuDropDown(!MenuDropDown) }}>  Menu <ChevronDown /></span>
                        <div className={`headerMenuItems ${MenuDropDown ? "" : "d-none"}`}>
                            <a href='/' className='us-none fs-6'>Home</a>
                            <a href='/' className='us-none fs-6'>Updates</a>
                            <a href='/' className='us-none fs-6'>Careers</a>
                            <a href='/' className='us-none fs-6'>Manifesto</a>
                            <a href='/' className='us-none fs-6'>Email us</a>
                        </div>
                    </div>
                </div>
                <div className="headerBetaBtn">
                    <h3 className='headerButton'>Join the private beta</h3>
                </div>
            </div>
        </Fragment>
    )
}

export default Header