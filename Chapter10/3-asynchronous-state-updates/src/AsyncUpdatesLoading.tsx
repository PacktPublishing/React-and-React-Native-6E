import { startTransition, useState, type ChangeEventHandler } from "react";

const unfilteredItems = new Array(25000)
  .fill(null)
  .map((_, i) => ({ id: i, name: `Item ${i}` }));

function filterItems(filter: string): Promise<{ id: number; name: string }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(unfilteredItems.filter((item) => item.name.includes(filter)));
    }, 1000);
  });
}

export default function AsyncUpdatesLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [items, setItems] = useState<{ id: number; name: string }[]>([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    setFilter(e.target.value);
    setIsLoading(true);

    startTransition(() => {
      if (e.target.value === "") {
        setItems([]);
        setIsLoading(false);
      } else {
        filterItems(e.target.value).then((result) => {
          setItems(result);
          setIsLoading(false);
        });
      }
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Filter"
          value={filter}
          onChange={handleChange}
        />
      </div>
      <div>
        {isLoading && <em>loading...</em>}
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
