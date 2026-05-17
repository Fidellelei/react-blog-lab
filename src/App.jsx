import blog from "./blog";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

function About({
  image = "https://via.placeholder.com/150",
  about,
}) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;