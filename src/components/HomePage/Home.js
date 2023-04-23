import React, { Fragment, useEffect, useState } from 'react'
import Header from '../Header/Header'
import "./Home.css"
import ScrollSlider from './ScrollSlider';


const Home = () => {




    const [width, setWidth] = useState(0);

    useEffect(() => {
        let wrapper = document.querySelector('.main-section');
        let text = document.querySelector('.text')
        let textWidth = text.clientWidth
        wrapper.addEventListener('mousemove', handleMouseMove);

        // Cleanup function to remove the event listener
        return () => {
            wrapper.removeEventListener('mousemove', handleMouseMove);
        }
    }, [setWidth]);

    const handleMouseMove = (e) => {
        let x = e.clientX;
        setWidth(x);
    };


    return (
        <Fragment>
            {console.log(width)}
            <div className="main-section position-relative" >
                <Header />
                <h1 className='text'>Get thing done with <br /> your Squad</h1>
                <div className="wrapper" style={{ "--width": ` ${width}px` }}>
                    <ScrollSlider imageLink={"https://designshack.net/wp-content/uploads/Food-Delivery-App-Mobile-App-UI-Kit.jpg"} />
                </div>
                <ScrollSlider imageLink={"https://c4.wallpaperflare.com/wallpaper/376/866/377/love-image-4k-full-hd-background-wallpaper-preview.jpg"} />
            </div>
        </Fragment>
    )
}

export default Home