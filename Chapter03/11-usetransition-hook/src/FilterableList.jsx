import { useState, useTransition } from 'react';

function FilterableList({ items }) {
  const [filter, setFilter] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    // Update the input immediately
    setFilter(newFilter);

    // Start a transition for the potentially slow filtering
    startTransition(() => {
      // Here you would ideally filter the items based on newFilter
      // For demonstration, we'll just imagine a slow operation
      console.log('Filtering for:', newFilter);
    });
  };

  return (
    <div>
      <input type="text" value={filter} onChange={handleFilterChange} />
      {isPending && <p>Loading results...</p>}
      {/* Render your filtered list here */}
    </div>
  );
}

export default FilterableList;