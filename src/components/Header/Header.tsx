import React, {Dispatch} from "react";
import "./Header.scss";


interface HeaderProps {
  handleSort:(e: React.ChangeEvent<HTMLSelectElement>)=>void;
  handleSearch:(e: React.ChangeEvent<HTMLInputElement>)=>void;
  value: string;
  query:string;
}

const Header = ({ handleSort, value, handleSearch, query }:HeaderProps) => {
  return (
    <header>
      <div className="header">
        <div className="search">
          <input
            type="text"
            placeholder="Enter photosets"
            className="input__search"
            value={query}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="header__sort">
        <select
          value={value}
          onChange={handleSort}
        >
          <option value="default">Default</option>
          <option value="title">Title</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
