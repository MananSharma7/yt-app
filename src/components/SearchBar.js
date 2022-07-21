import React, { useState } from "react";
import "./SearchBar.css";
import img from "./youtube-logo.png";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="ui input input-bar">
          <img src={img} alt="logo" />
          <input
            className="prompt"
            type="text"
            placeholder="Search..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
