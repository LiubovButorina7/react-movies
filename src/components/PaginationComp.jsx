import { Pagination, PaginationItem } from '@mui/material';
import { useContext } from "react";
import { MovieContext, MovieDispatchContext } from "../Context";

import { Link } from 'react-router-dom';

export function PaginationComp() {
  const { pagesQty, page, search, type } = useContext(MovieContext);
  const dispatch = useContext(MovieDispatchContext);

  const handleChange = (e, p) => {
    dispatch({
      type: "setPage",
      payload: p,
    });
  };

  return (
    <Pagination className="pagination"
      count={pagesQty}
      size="large"
      page={page}
      color="secondary"
      showFirstButton
      showLastButton
      onChange={handleChange}    
    />
  );
}