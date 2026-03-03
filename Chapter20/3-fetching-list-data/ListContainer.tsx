import React, { useState, useEffect } from "react";
import { fetchItems } from "./api";
import List from "./List";

type MappedList = { key: string; value: string }[];

function mapItems(items: string[]): MappedList {
  return items.map((value, i) => ({ key: i.toString(), value }));
}

export default function ListContainer() {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState<MappedList>([]);

  useEffect(() => {
    fetchItems(filter, asc)
      .then((resp) => resp.json())
      .then(({ items }) => {
        setData(mapItems(items));
      });
  }, [filter, asc]);

  return (
    <List
      data={data}
      asc={asc}
      onFilter={(text) => {
        setFilter(text);
      }}
      onSort={() => {
        setAsc(!asc);
        ;
      }}
    />
  );
}
