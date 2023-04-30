import React from 'react'

const ScrollSlider = ({ imageLink }) => {
    return (
        <div className="UiSlider">
            <div className="SlideOne">
                {imageLink.map((item, index) => (
                    <div className="images">
                        <img src={item} height="570" width="450" frameborder="0" scrolling="no" />
                    </div>
                ))}
            </div>
            <div className="SlideOne">
                {imageLink.map((item, index) => (
                    <div className="images">
                        <img src={item} height="570" width="450" frameborder="0" scrolling="no" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScrollSlider