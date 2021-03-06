import React, { useEffect, useState } from "react";

export const CarouselItem = ({children, width}) => {
    return(
        <>
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>

        </>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const [paused, setPaused] = useState(false);


    //goes back to the first one when finishign cycling thru the pics
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children)-1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if(!paused){
            updateIndex(activeIndex +1);
            }
        }, 5000); //this eqials to 5 seconds

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    return(
        //this will make the slide show stop if mouse is on or off the pic
        <div className="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        > 
            <div className="inner" 
            style={{ transform: `translateX(-${activeIndex * 100 }%)`}}
            >
                {/* iterate the items component  */}
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: '100%'});
                })}
            </div>
            <div className="indicators">
            <button 
                onClick={() => {
                    updateIndex(activeIndex -1);
                }} 
                >
                Prev
            </button>
            {React.Children.map(children, (child, index) => {
                return (
                    <button 
                        className={`${index === activeIndex ? "active" : ""}`}
                        onClick={() => {
                            updateIndex(index);
                        }}
                    >
                        {index +1}
                    </button>
                );
            })}
            <button 
                onClick={() => {
                    updateIndex(activeIndex +1);
                }} 
                > Next 
            </button>
        </div>


            </div>
    );
};

export default Carousel;