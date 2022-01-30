import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  getSinglePhotoSets,
  getDescriptionPhotoSets,
} from '../../store/actions/action';
import './SinglePhotoset.scss';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';
import Carousel, { CarouselItem } from '../../components/Carousel/Carousel';
import { chunkArray, photoStaticURL } from '../../helpers/helpers';
import { useTypedSelector } from '../../hooks/useTypedSelector';

function SinglePhotoset() {
  const [carouselToggle, setCarouselToggle] = useState<boolean>(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const singlePhotoset = useTypedSelector((state) => state.singlePhotoset);
  const { description, isFetchingDesc } = useTypedSelector(
    (state) => state.description
  );
  const {
    isFetching,
    photos: { photo, title, ownername },
  } = singlePhotoset;

  useEffect(() => {
    dispatch(getSinglePhotoSets(id));
    dispatch(getDescriptionPhotoSets(id));
  }, []);

  if (isFetching || isFetchingDesc) {
    return <Loader />;
  }

  const sliderData = chunkArray(photo, 3);

  return (
    <section className="single__section">
      <div className="container">
        <div className="photoset">
          <h1 className="photoset__owner">{ownername}</h1>
          <p className="photoset__title">{title}</p>
          <p className="photoset__description">
            {description || 'Not found description'}
          </p>
          <button
            className="photoset__button"
            type="button"
            onClick={() => setCarouselToggle(!carouselToggle)}
          >
            {carouselToggle ? 'View Photoset' : 'View Carousel'}
          </button>
        </div>
        {!carouselToggle && (
          <div className="container__card">
            {photo.map((p) => (
              <Card key={p.id}>
                <div className="single">
                  <div className="single__image">
                    <img
                      className="single__photo"
                      src={photoStaticURL(p.farm, p.server, p.id, p.secret)}
                      alt="pic"
                    />
                  </div>
                  <div className="single__content">
                    <p className="single__title">{p.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
      {carouselToggle && (
        <Carousel>
          {sliderData.map((sliderItem: any[]) => (
            <CarouselItem key={uuidv4()} sliderItem={sliderItem} width="100%" />
          ))}
        </Carousel>
      )}
    </section>
  );
}

export default SinglePhotoset;
