import { useState, useCallback } from "react";

const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

export default function useArticles(initial = []) {
    const [articles, setArticles] = useState(initial);
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
  
    const onChangeTitle = useCallback((e) => setTitle(e.target.value), []);
    const onChangeSummary = useCallback((e) => setSummary(e.target.value), []);
    const onClickAdd = useCallback(() => {
      setArticles((state) => [
        ...state,
        { id: id.next(), title, summary, display: "none" },
      ]);
      setTitle("");
      setSummary("");
    }, [title, summary]);
    const onClickRemove = useCallback((id) => {
      setArticles((state) => state.filter((a) => a.id !== id));
    }, []);
  
    return { articles, title, summary, onChangeTitle, onChangeSummary, onClickAdd, onClickRemove };
  }