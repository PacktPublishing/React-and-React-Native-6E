import React, { useState, useEffect } from "react";
import * as api from "./api";
import List from "./List";

export default function ListContainer() {
  const [data, setData] = useState<{ key: string; value: string }[]>([]);

  function loadItems() {
    return api
      .fetchItems({})
      .then((resp) => resp.json())
      .then(({ items }) => {
        setData((prev) => [
          ...prev,
          ...items.map((value) => ({ key: value, value })),
        ]);
      });
  }

  useEffect(() => {
    loadItems();
  }, []);

  return <List data={data} fetchItems={loadItems} />;
}
