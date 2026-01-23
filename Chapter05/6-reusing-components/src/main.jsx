import { createRoot } from "react-dom/client";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";
import MyFeature from "./MyFeature";

const renderAddArticle = ({
  name,
  title,
  summary,
  onChangeTitle,
  onChangeSummary,
  onClickAdd,
}) => (
  <AddArticle
    name={name}
    title={title}
    summary={summary}
    onChangeTitle={onChangeTitle}
    onChangeSummary={onChangeSummary}
    onClickAdd={onClickAdd}
  />
);

const renderArticleList = ({ articles, onClickRemove }) => (
  <ArticleList articles={articles} onClickRemove={onClickRemove} />
);

createRoot(document.getElementById("root")).render(
  <>
    <MyFeature
      addArticle={renderAddArticle}
      articleList={renderArticleList} />
  </>
);
