import { Pagination } from '@mui/material';
import { useContext } from "react";
import { MovieContext, MovieDispatchContext } from "../Context";

export function PaginationComp() {
  const { pagesQty, page } = useContext(MovieContext);
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