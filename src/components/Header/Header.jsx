import React from 'react';
import './Header.scss';

const Header = ({ handleSort, selectedSort, setSearchQuery, query }) => {

    return (
        <header>
            <div className="header">
                <div className="search">
                    <input
                        type="text"
                        placeholder='Enter photosets'
                        className="input__search"
                        value={query}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="header__sort">
                <select
                    value={selectedSort}
                    onChange={e => handleSort(e.target.value)}
                >
                    <option value="default" >Default</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </header>
    )
};

export default Header;
