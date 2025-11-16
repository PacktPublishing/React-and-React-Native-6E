import { createRoot } from "react-dom/client";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";
import MyFeature from "./MyFeature";

const root = createRoot(document.getElementById("root"));
root.render(
  <MyFeature
    addArticle={({
      title,
      summary,
      onChangeTitle,
      onChangeSummary,
      onClickAdd,
    }) => (
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={onChangeTitle}
        onChangeSummary={onChangeSummary}
        onClickAdd={onClickAdd}
      />
    )}
    articleList={({ articles, onClickRemove }) => (
      <ArticleList articles={articles} onClickRemove={onClickRemove} />
    )}
  />
);
