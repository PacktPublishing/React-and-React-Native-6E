import { useDeferredValue, useState } from "react";

function SearchInputWithDeferredResults() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      {/* Results component uses the deferred value */}
      <SearchResults query={deferredQuery} />
    </div>
  );
}

function SearchResults({ query }) {
  // Imagine this component renders a large, filtered list based on the query
  // This rendering might be slow.
  console.log("Rendering results for:", query);
  return <div>{/* Display filtered results based on deferredQuery */}</div>;
}

export default SearchInputWithDeferredResults;
