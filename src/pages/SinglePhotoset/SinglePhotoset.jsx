import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSinglePhotoSets, getDescriptionPhotoSets } from '../../store/actions/action';
import './SinglePhotoset.scss';
import Loader from '../../components/Loader/Loader.jsx';
import Card from '../../components/Card/Card.jsx';
import Carousel, { CarouselItem } from '../../components/Carousel/Carousel.jsx';
import { chunkArray, photoStaticURL } from '../../helpers/helpers';
import { v4 as uuidv4 } from 'uuid';

const SinglePhotoset = () => {
    const [carouselToggle, setCarouselToggle] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const singlePhotoset = useSelector(state => state.singlePhotoset);
    const { description, isFetchingDesc } = useSelector(state => state.description);
    const { isFetching, photos } = singlePhotoset;
    const { photoset } = photos;


    useEffect(() => {
        dispatch(getSinglePhotoSets(id));
        dispatch(getDescriptionPhotoSets(id));
    }, []);


    if (isFetching || isFetchingDesc) {
        return <Loader />
    };

    const sliderData = chunkArray(photoset.photo, 3);

    return (
        <section className="single">
            <div className="container">
                <div className="photoset__info">
                    <h1 className="photoset__owner">{photoset.ownername}</h1>
                    <p className="photoset__title">{photoset.title}</p>
                    <p className="photoset__description">{description ? description : 'Not found description'}</p>
                    <button
                        className="photoset__button"
                        onClick={() => setCarouselToggle(!carouselToggle)}
                    >
                        {carouselToggle ? 'View Photoset' : 'View Carousel'}
                    </button>
                </div>
                {!carouselToggle && <div className="container__card">
                    {photoset.photo.map(p => (
                        <Card key={p.id}>
                            <div className="card__single">
                                <div className="single__image">
                                    <img className="image" src={photoStaticURL(p.farm, p.server, p.id, p.secret)} alt="photo" />
                                </div>
                                <div className="single__content">
                                    <p className="content__title">{p.title}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>}
            </div>
            {carouselToggle && <Carousel>
                {sliderData.map((sliderItem) => (
                    <CarouselItem
                        key={uuidv4()}
                        sliderItem={sliderItem}
                    >
                    </CarouselItem>
                ))}
            </Carousel>}
        </section>
    );
};

export default SinglePhotoset;
