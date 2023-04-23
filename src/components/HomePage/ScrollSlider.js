import React from 'react'

const ScrollSlider = ({ imageLink }) => {
    return (
        <div className="UiSlider">
            <div className="SlideOne">
                {[...Array(10)].map((item, index) => (
                    <div className="images">
                        <iframe src={imageLink} height="570" width="450" frameborder="0" scrolling="no" ></iframe>
                    </div>
                ))}
            </div>
            <div className="SlideOne">
                {[...Array(10)].map((item, index) => (
                    <div className="images">
                        <iframe src={imageLink} height="570" width="450" frameborder="0" scrolling="no" ></iframe>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScrollSlider