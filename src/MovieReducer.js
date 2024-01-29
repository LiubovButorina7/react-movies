export function MovieReducer(movieState, { type, payload }) {
    switch (type) {
      case "setMovies": {
        return {
          ...movieState,
          movies: [...payload],
          loading: false,
        };
      }
      case "setTotalResults": {
        return {
          ...movieState,
          totalResults: payload ? payload : 0,
        };
      }
      case "setPagesQty": {
        return {
          ...movieState,
          pagesQty: Math.ceil(payload.totalResults / payload.pageSize),
        }
      }
      case "setRanges": {
        const newRange1 = payload.page * 10 - 9;
        const newRange2 = payload.length < payload.pageSize ? (payload.page * 10 - payload.pageSize + payload.length) : (payload.page * 10);
        return {
          ...movieState,
          range1: newRange1,
          range2: newRange2,
        }
      }
      case "setSearchValue": {
        return {
          ...movieState,
          search: payload,
        }
      }
      case "setPage": {
        return {
          ...movieState,
          page: payload,
        }
      }
      case "handleFind": {
        return {
          ...movieState,
          searchString: payload,
        }
      }
      case "handleFilter": {
        return {
          ...movieState,
          type: payload,
        }
      }
      default:
        return { ...movieState };
    }
  }