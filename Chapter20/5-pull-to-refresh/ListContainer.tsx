import React, { useState, useEffect } from "react";
import * as api from "./api";
import List from "./List";

export default function ListContainer() {
  const [data, setData] = useState<{ key: string; value: string }[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  function loadItems() {
    return api
      .fetchItems()
      .then((resp) => resp.json())
      .then(({ items }) => {
        setData((prev) => [
          ...prev,
          ...items.map((value) => ({ key: value, value })),
        ]);
      });
  }

  function refreshItems() {
    setIsRefreshing(true);
    return api
      .fetchItems()
      .then((resp) => resp.json())
      .then(({ items }) => {
        setData(items.map((value) => ({ key: value, value })));
      })
      .finally(() => {
        setIsRefreshing(false);
      });
  }

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <List
      data={data}
      fetchItems={loadItems}
      refreshItems={refreshItems}
      isRefreshing={isRefreshing}
    />
  );
}
