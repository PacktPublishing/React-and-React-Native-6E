import useArticles from "./useArticles";
import * as React from "react";

const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

function MyFeature({ addArticle, articleList }) {
  const first = useArticles([
    {
      id: id.next(),
      title: "Article 1",
      summary: "Article 1 Summary",
      display: "none",
    },
    {
      id: id.next(),
      title: "Article 2",
      summary: "Article 2 Summary",
      display: "none",
    },
  ]);
  const second = useArticles([
    {
      id: id.next(),
      title: "Article 3",
      summary: "Article 3 Summary",
      display: "none",
    },
    {
      id: id.next(),
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
          onClickRemove: first.onClickRemove,
        })}
      </section>
      <section>
        {addArticle({ ...second, name: "Second Articles" })}
        {articleList({
          articles: second.articles,
          onClickRemove: second.onClickRemove,
        })}
      </section>
    </>
  );
}

export default MyFeature;
