import Home from "./routes/Home";
import About from "./routes/About";
import ArticlesList from "./routes/ArticlesList";
import Article from "./routes/Article";
import NotFound from "./routes/NotFound";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="articles-list" element={<ArticlesList />} />
          <Route path="article/:name" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
