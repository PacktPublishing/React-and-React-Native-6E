import useArticles from "./useArticles";
import { idGenerator as id } from "./useArticles";

function MyFeature({ addArticle, articleList }) {
  const first = useArticles([
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
  const second = useArticles([
    {
      id: id.next().value,
      title: "Article 3",
      summary: "Article 3 Summary",
      display: "none",
    },
    {
      id: id.next().value,
      title: "Article 4",
      summary: "Article 4 Summary",
      display: "none",
    },
  ]);

  return (
    <>
      <section>
        {addArticle({ ...first, name: "First Articles" })}
        {articleList({
          articles: first.articles,
          onRemove: first.handleRemoveArticle,
        })}
      </section>
      <section>
        {addArticle({ ...second, name: "Second Articles" })}
        {articleList({
          articles: second.articles,
          onRemove: second.handleRemoveArticle,
        })}
      </section>
    </>
  );
}

export default MyFeature;
