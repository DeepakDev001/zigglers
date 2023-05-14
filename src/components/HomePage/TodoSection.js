import React, { Fragment, useState } from 'react'
import image from "../../Images/TodoImage/628813e882360fc152113c1d_62796bddaf96f13172a81fed_asset1.jpg"

const TodoSection = () => {


    const [isActive, setIsActive] = useState(1)


    return (
        <Fragment>
            <div className=' SectionBgColor TodoSection d-flex flex-column align-items-center pb-5'>
                <div className="TodoHeader d-flex align-items-center justify-content-center h-100">
                    <div className="d-flex gap-5 align-items-center">
                        <h1 className='todoHeadingText text-center'>Like a to-do <br /> list but <span className='purpleText'>better</span></h1>
                        <div className="todoHeaderLinks">
                            <h5 onClick={() => setIsActive(1)} className={`${isActive === 1 ? "TodoActiveLink" : "TodoHeaderLink"}`}>Manage your Day</h5>
                            <h5 onClick={() => setIsActive(2)} className={`${isActive === 2 ? "TodoActiveLink" : "TodoHeaderLink"}`}>Work with your team</h5>
                            <h5 onClick={() => setIsActive(3)} className={`${isActive === 3 ? "TodoActiveLink" : "TodoHeaderLink"}`}>Plan a family vacation</h5>
                        </div>
                    </div>
                </div>
                <div className="container-fluid  d-flex align-items-center justify-content-center" style={{ objectFit: 'contain' }}>
                    <img src={image} style={{ objectFit: "cover" }} className='container rounded-4 TodoDisplayVideoCard shadow-lg' />
                </div>
            </div>
        </Fragment>
    )
}

export default TodoSection