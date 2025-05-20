import React from "react";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import { toast } from 'react-toastify';
const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) {
          toast.error("Please enter a search term!");
          return;}
          onSearch(searchTerm.trim());
        };
     return (
      <div className={styles.searchBarContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search some movies!"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
            </form></div>)
};
export default SearchBar;