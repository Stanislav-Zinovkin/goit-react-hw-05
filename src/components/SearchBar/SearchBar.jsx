import React from "react";
import { useState } from "react";
const SearchBar = ({ setQuery}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
          setQuery(searchTerm.trim());
        }}
     return (
    <div>
<form onSubmit={handleSubmit}>
            <input  type="text"
               autoComplete="off"
               autoFocus
               placeholder="Search some movies!"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}/>
            
             <button type="submit">Search</button>
            </form></div>)
};
export default SearchBar;