import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Carousel.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

interface CarouselProps {
  children: JSX.Element | JSX.Element[];
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
