import Articles from "../components/Articles";
import articleContent from "../article-content";

const ArticlesList = () => {
  return (
    <>
      <h1>Articles</h1>
      <Articles articles={articleContent} />
    </>
  );
};

export default ArticlesList;
