import { useState, useCallback } from "react";

export const idGenerator = (function* () {
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

  const handleChangeTitle = useCallback((e) => setTitle(e.target.value), []);
  const handleChangeSummary = useCallback(
    (e) => setSummary(e.target.value),
    [],
  );
  const handleAddArticle = useCallback(() => {
    setArticles((state) => [
      ...state,
      {
        id: idGenerator.next().value,
        title: title,
        summary: summary,
        display: "none",
      },
    ]);
    setTitle("");
    setSummary("");
  }, [summary, title]);

  const handleRemoveArticle = useCallback((id) => {
    setArticles((state) => state.filter((a) => a.id !== id));
  }, []);

  return {
    articles,
    title,
    summary,
    handleChangeTitle,
    handleChangeSummary,
    handleAddArticle,
    handleRemoveArticle,
  };
}
