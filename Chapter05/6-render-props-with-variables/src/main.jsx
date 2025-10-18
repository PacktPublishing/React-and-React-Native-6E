import * as ReactDOM from "react-dom/client";
import MyFeature from "./MyFeature";
import ArticleList from "./ArticleList";
import AddArticle from "./AddArticle";

const renderAddArticle = ({
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
)

const renderArticleList = ({ articles, onClickRemove }) => (
  <ArticleList articles={articles} onClickRemove={onClickRemove} />
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyFeature
    addArticle={renderAddArticle}
    articleList={renderArticleList}
  />
);