import { useContext } from "react";
import { MovieContext } from "../Context";

export function RangeResults() {
    const { totalResults, searchString, range1, range2 } = useContext(MovieContext);

    return (
      <div>
        <h3 className="totalResults">Found {totalResults} results for &#34;{searchString}&#34;</h3>
        {totalResults > 0 && <h5 className="ranges">Showing {range1}-{range2} results</h5>}
      </div>
    );
}