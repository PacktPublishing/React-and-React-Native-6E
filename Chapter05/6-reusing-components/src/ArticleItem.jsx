import { useCallback, useState } from "react";

function ArticleItem({ article, onClickRemove }) {
  const [isOpened, setIsOpened] = useState(article.display !== "none");

  const onClickToggle = useCallback(() => {
    setIsOpened((state) => !state);
  }, []);

  return (
    <li>
      <a href={`#${article.id}`} title="Toggle Summary" onClick={onClickToggle}>
        {article.title}
      </a>
      &nbsp;
      <button
        href={`#${article.id}`}
        title="Remove"
        onClick={() => onClickRemove(article.id)}
      >
        &#10007;
      </button>
      <p style={{ display: isOpened ? "block" : "none" }}>{article.summary}</p>
    </li>
  );
}

export default ArticleItem;
