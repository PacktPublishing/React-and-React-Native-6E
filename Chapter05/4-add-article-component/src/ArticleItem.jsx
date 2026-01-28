import { useCallback, useState } from "react";

function ArticleItem({ article, onRemove }) {
  const [isOpened, setIsOpened] = useState(article.display !== "none");

  const handleToggleSummary = useCallback(() => {
    setIsOpened((state) => !state);
  }, []);

  return (
    <li>
      <a href={`#${article.id}`} title="Toggle Summary" onClick={handleToggleSummary}>
        {article.title}
      </a>
      &nbsp;
      <button
        href={`#${article.id}`}
        title="Remove"
        onClick={() => onRemove(article.id)}
      >
        &#10007;
      </button>
      <p style={{ display: isOpened ? "block" : "none" }}>{article.summary}</p>
    </li>
  );
}

export default ArticleItem;
