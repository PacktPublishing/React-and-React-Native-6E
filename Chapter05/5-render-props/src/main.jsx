import { createRoot } from "react-dom/client";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";
import MyFeature from "./MyFeature";

createRoot(document.getElementById("root")).render(
  <MyFeature
    addArticle={({
      title,
      summary,
      onChangeTitle,
      onChangeSummary,
      onAdd,
    }) => (
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={onChangeTitle}
        onChangeSummary={onChangeSummary}
        onAdd={onAdd}
      />
    )}
    articleList={({ articles, onRemove }) => (
      <ArticleList articles={articles} onRemove={onRemove} />
    )}
  />
);
