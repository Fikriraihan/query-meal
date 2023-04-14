import React from "react";
import classes from "./SearchBar.module.scss";

interface IProps {
  searchText?: string;
  setSearchText?: any;
}

function SearchBar({ searchText, setSearchText }: IProps) {
  return <input className={classes.input} value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="search meals" />;
}

export default SearchBar;
