import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotoSets } from '../../store/actions/action';
import Header from '../../components/Header/Header.jsx';
import Card from '../../components/Card/Card.jsx';
import './Photosets.scss';
import Loader from '../../components/Loader/Loader.jsx';
import { useNavigate } from 'react-router-dom';
import photo from '../../assets/photo.jpg';
import { v4 as uuidv4 } from 'uuid';

const Photosets = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { sets, isFetching, pages } = useSelector(state => state.photoset);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSort, setSelectedSort] = useState('default');

    const handleSort = (sortType) => {
        setSelectedSort(sortType)
    };

    const transformItems = () => {
        let items = [...sets]

        if (selectedSort === 'title') {
            items = items.sort((a, b) => a.title._content.localeCompare(b.title._content))
        };

        if (searchQuery) {
            items = items.filter((i) =>
                i.title._content.toLowerCase().includes(searchQuery)
            );
        };

        return items
    };

    const pageHandler = (e) => {
        e.preventDefault();
        setPage(prevState => prevState + 1);
        dispatch(getPhotoSets(page + 1));
        setSearchQuery('');
    };


    const handleRoute = (id) => {
        navigate(`/photo/${id}`);
    };

    useEffect(() => {
        dispatch(getPhotoSets(1));
    }, []);

    if (isFetching) {
        return <Loader />
    };

    return (
        <>
            <Header
                value={selectedSort}
                handleSort={handleSort}
                setSearchQuery={setSearchQuery}
                query={searchQuery}
            />
            <section className="photoset">
                <div className="container">
                    <div className="container__card">
                        {transformItems().length > 0 && transformItems().map(set => (
                            <Card
                                key={set.id + uuidv4()}
                                description={set.description._content}
                                title={set.title._content}
                            >
                                <img className="card__image" src={photo} alt="photo" />
                                <div className="card__content">
                                    <h2 className="card__title">{set.title._content}</h2>
                                    <button
                                        className="card__btn"
                                        onClick={() => { handleRoute(set.id) }}
                                    >
                                        Learn More</button>
                                </div>
                            </Card>
                        ))
                        }
                    </div>
                    <button
                        className="btn__load"
                        onClick={pageHandler}
                        disabled={page === pages}
                    >
                        Load More
                    </button>
                </div>
            </section>
        </>
    );
};

export default Photosets;
