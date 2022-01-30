import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPhotoSets } from '../../store/actions/action';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import './Photosets.scss';
import Loader from '../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';

function Photosets() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { sets, isFetching, pages } = useTypedSelector(
    (state) => state.photoset,
  );
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSort, setSelectedSort] = useState<string>('default');

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(e.target.value);
  };

  const transformItems = () => {
    let items = [...sets];

    if (selectedSort === 'title') {
      items = items.sort((a, b) => a.title._content.localeCompare(b.title._content));
    }

    if (searchQuery) {
      items = items.filter((i) => i.title._content.toLowerCase().includes(searchQuery));
    }

    return items;
  };

  const pageHandler = () => {
    setPage((prevState) => prevState + 1);
    dispatch(getPhotoSets(page + 1));
    setSearchQuery('');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleRoute = (id: string) => {
    navigate(`/photo/${id}`);
  };

  useEffect(() => {
    dispatch(getPhotoSets(1));
  }, []);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <>
      <Header
        value={selectedSort}
        handleSort={handleSort}
        handleSearch={handleSearch}
        query={searchQuery}
      />
      <section className="photoset">
        <div className="container">
          <div className="container__card">
            {transformItems().length > 0
              && transformItems().map((set) => (
                <Card key={set.id + Date.now()}>
                  <img
                    className="card__image"
                    src="https://st.depositphotos.com/1358982/2673/i/600/depositphotos_26735295-stock-photo-lens.jpg"
                    alt="pic"
                  />
                  <div className="card__content">
                    <h2 className="card__title">{set.title._content}</h2>
                    <button
                      className="card__btn"
                      type="button"
                      onClick={() => {
                        handleRoute(set.id);
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </Card>
              ))}
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
}

export default Photosets;
