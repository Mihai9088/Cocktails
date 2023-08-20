import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <div className="section search">
      <form action="" className="search-form" onSubmit={preventDefault}>
        <div className="form-control">
          <label htmlFor="name">search drink</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
