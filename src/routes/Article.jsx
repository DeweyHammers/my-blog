import { useParams } from "react-router-dom";
import articleContent from "../article-content";
import Articles from "../components/Articles";
import NotFound from "./NotFound";

const Article = () => {
  const name = useParams().name;
  const article = articleContent.find((article) => article.name === name);
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  if (!article) return <NotFound />;

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <Articles articles={otherArticles} />
    </>
  );
};

export default Article;
