import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Carousel.scss';
import { photoStaticURL, cutString } from '../../helpers/helpers';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';


export const CarouselItem = ({ sliderItem, width }) => {
    return (
        <div className="carousel__item" style={{ width: width }}>
            {sliderItem.map((slider) => (
                <div key={uuidv4} className="carousel__card">
                    <img
                        className="carousel__image"
                        src={photoStaticURL(slider.farm, slider.server, slider.id, slider.secret)} alt="photo"
                    />
                    <p className="carousel__title">{cutString(slider.title)}</p>
                </div>
            ))};
        </div>
    )
};


const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0

        };

        setActiveIndex(newIndex)
    };



    const handlers = useSwipeable({
        onSwipedLeft: () => {
            updateIndex(activeIndex + 1)
        },
        onSwipedRight: () => {
            updateIndex(activeIndex - 1)
        },
    });


    return (
        <div
            {...handlers}
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="carousel__inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, { width: '100%' })
                })};
            </div>
            <AiOutlineArrowLeft
                className="carousel__arrow--left"
                onClick={() => {
                    updateIndex(activeIndex - 1)
                }}
            />

            <AiOutlineArrowRight
                className='carousel__arrow--right'
                disabled={activeIndex === React.Children.count(children) - 1}
                onClick={() => {
                    updateIndex(activeIndex + 1)
                }}
            />
        </div>
    )
};

export default Carousel;

