function ArticleList({ articles, onToggle, onRemove }) {
  return (
    <ul>
      {articles.map((i) => (
        <li key={i.id}>
          <a
            href={`#${i.id}`}
            title="Toggle Summary"
            onClick={() => onToggle(i.id)}
          >
            {i.title}
          </a>
          &nbsp;
          <button
            href={`#${i.id}`}
            title="Remove"
            onClick={() => onRemove(i.id)}
          >
            &#10007;
          </button>
          <p style={{ display: i.display }}>{i.summary}</p>
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
