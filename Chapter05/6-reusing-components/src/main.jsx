import { createRoot } from "react-dom/client";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";
import MyFeature from "./MyFeature";

const renderAddArticle = ({
  name,
  title,
  summary,
  handleChangeTitle,
  handleChangeSummary,
  handleAddArticle,
}) => (
  <AddArticle
    name={name}
    title={title}
    summary={summary}
    onChangeTitle={handleChangeTitle}
    onChangeSummary={handleChangeSummary}
    onAdd={handleAddArticle}
  />
);

const renderArticleList = ({ articles, onRemove }) => (
  <ArticleList articles={articles} onRemove={onRemove} />
);

createRoot(document.getElementById("root")).render(
  <>
    <MyFeature
      addArticle={renderAddArticle}
      articleList={renderArticleList} />
  </>
);
