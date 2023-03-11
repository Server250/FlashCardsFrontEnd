import React, { useState } from "react";

import "./SearchBar.css";

const SearchBar = (props) => {

    const [searchVal, setSearchVal] = useState("");

    const handleSearchChange = (e) => {
        setSearchVal(e.target.value);
        props.onSearch(e.target.value);
    }

    return (
        <input type="text" placeholder={props.placeholder || "Search.."} onChange={handleSearchChange} value={searchVal} className="searchBar"></input>
    )

}

export default SearchBar;