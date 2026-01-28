import ArticleItem from "./ArticleItem";

function ArticleList({ articles, onRemove }) {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default ArticleList;
