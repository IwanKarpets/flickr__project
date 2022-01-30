import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Carousel.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import { photoStaticURL, cutString } from '../../helpers/helpers';

interface CarouselItemProps {
  sliderItem: any[];
  width: string;
}

interface CarouselProps {
  children: JSX.Element | JSX.Element[];
}

export function CarouselItem({ sliderItem, width }: CarouselItemProps) {
  return (
    <div className="carousel__item" style={{ width }}>
      {sliderItem.map((slider) => (
        <div key={uuidv4()} className="carousel__card">
          <img
            className="carousel__image"
            src={photoStaticURL(
              slider.farm,
              slider.server,
              slider.id,
              slider.secret,
            )}
            alt="pic"
          />
          <p className="carousel__title">{cutString(slider.title)}</p>
        </div>
      ))}
    </div>
  );
}

function Carousel({ children }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      updateIndex(activeIndex + 1);
    },
    onSwipedRight: () => {
      updateIndex(activeIndex - 1);
    },
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="carousel__inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => React.cloneElement(child, { width: '100%' }))}
        ;
      </div>
      <AiOutlineArrowLeft
        className="carousel__arrow--left"
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      />

      {activeIndex !== React.Children.count(children) - 1 && (
        <AiOutlineArrowRight
          className="carousel__arrow--right"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      )}
    </div>
  );
}

export default Carousel;
