import React from "react";

import { FaSearch } from "react-icons/fa";

import "./search.scss"

const Search = () => {
  return (
    <div>
      <form>
          <input type="text" className="form-control searchbar" placeholder="&#xF002; Search Here" style={{fontFamily:"Arial, FontAwesome"}} />
      </form>
    </div>
  );
};

export default Search;
