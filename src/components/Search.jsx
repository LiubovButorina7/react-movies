function Search({ fetchData, type, search, setSearchValue, setType, setPage, setSearchString }) {
  
  function handleFind() {
    setPage(1);
    setSearchString(search.trim());
    fetchData();
    
  }

  function handleFilter(typeValue) {
    setType(typeValue);
    setPage(1);
    
  }

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            id="searchMovie"
            type="search"
            className="validate"
            placeholder="search"
            value={search}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleFind();
              }
            }}
          />
          <button className="btn search-btn" onClick={() => handleFind()}>
            Search
          </button>
        </div>

        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="all"
              checked={type === 'all'}
              onChange={(e) => handleFilter(e.target.value)}
            />
            <span>All</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="movie"
              checked={type === 'movie'}
              onChange={(e) => handleFilter(e.target.value)}
            />
            <span>Movies only</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="series"
              checked={type === 'series'}
              onChange={(e) => handleFilter(e.target.value)}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export { Search };
