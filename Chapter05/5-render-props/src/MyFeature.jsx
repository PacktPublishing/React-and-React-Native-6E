import { useCallback, useState } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

function MyFeature() {
  const [articles, setArticles] = useState([
    {
      id: id.next().value,
      title: "Article 1",
      summary: "Article 1 Summary",
      display: "none",
    },
    {
      id: id.next().value,
      title: "Article 2",
      summary: "Article 2 Summary",
      display: "none",
    },
  ]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const handleChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleChangeSummary = useCallback((e) => {
    setSummary(e.target.value);
  }, []);

  const handleAddArticle = useCallback(() => {
    setArticles((state) => [
      ...state,
      {
        id: id.next().value,
        title: title,
        summary: summary,
        display: "none",
      },
    ]);
    setTitle("");
    setSummary("");
  }, [summary, title]);

  const handleRemoveArticle = useCallback((id) => {
    setArticles((state) => state.filter((article) => article.id !== id));
  }, []);

  return (
    <section>
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={handleChangeTitle}
        onChangeSummary={handleChangeSummary}
        onAdd={handleAddArticle}
      />
      <ArticleList articles={articles} onRemove={handleRemoveArticle} />
    </section>

  );
}

export default MyFeature;
