import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "../article-content";
import Articles from "../components/Articles";
import UpVote from "../components/UpVote";
import Comments from "../components/Comments";
import AddComment from "../components/AddComment";
import NotFound from "./NotFound";

const Article = () => {
  const name = useParams().name;
  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  if (!article) return <NotFound />;

  return (
    <>
      <h1>{article.title}</h1>
      <UpVote
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <Comments comments={articleInfo.comments} />
      <AddComment articleName={name} setArticleInfo={setArticleInfo} />
      <h3>Other Articles:</h3>
      <Articles articles={otherArticles} />
    </>
  );
};

export default Article;
