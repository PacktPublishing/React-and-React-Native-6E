import { startTransition, useState, type ChangeEventHandler } from "react";

const unfilteredItems = new Array(25000)
  .fill(null)
  .map((_, i) => ({ id: i, name: `Item ${i}` }));

export default function PrioritizingUpdates() {
  const [filter, setFilter] = useState("");
  const [items, setItems] = useState<{ id: number; name: string }[]>([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilter(e.target.value);
    startTransition(() => {
      setItems(
        e.target.value === ""
          ? []
          : unfilteredItems.filter((item) =>
              item.name.includes(e.target.value),
            ),
      );
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
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
