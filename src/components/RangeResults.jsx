export function RangeResults({data}) {
    const { totalResults, searchString, range1, range2 } = data;
       
    return (
      <div>
        <h3 style={{padding: "10px"}}>Found {totalResults} results for &#34;{searchString}&#34;</h3>
        {totalResults > 0 && <h5 style={{padding: "10px"}}>Showing {range1}-{range2} results</h5>}
      </div>
    );
}