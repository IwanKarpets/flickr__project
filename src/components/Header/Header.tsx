import React from 'react';
import './Header.scss';

interface HeaderProps {
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  query: string;
}

function Header({
  handleSort, value, handleSearch, query,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="inner">
        <div className="search">
          <input
            type="text"
            placeholder="Enter photosets"
            className="search__text"
            value={query}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="sort">
        <select
          className="sort__element"
          value={value}
          onChange={handleSort}
        >
          <option value="default">Default</option>
          <option value="title">Title</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
