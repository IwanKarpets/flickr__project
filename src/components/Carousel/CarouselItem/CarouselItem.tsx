import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { photoStaticURL, cutString } from '../../../helpers/helpers';
import './CarouselItem.scss';

interface CarouselItemProps {
  sliderItem: any[];
  width: string;
}

function CarouselItem({ sliderItem, width }: CarouselItemProps) {
  return (
    <div className="item" style={{ width }}>
      {sliderItem.map((slider) => (
        <div key={uuidv4()} className="item__card">
          <img
            className="item__image"
            src={photoStaticURL(
              slider.farm,
              slider.server,
              slider.id,
              slider.secret,
            )}
            alt="pic"
          />
          <p className="item__title">{cutString(slider.title)}</p>
        </div>
      ))}
    </div>
  );
};

export default CarouselItem;
