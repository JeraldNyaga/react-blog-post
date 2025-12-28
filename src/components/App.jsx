import blogData from "../data/blog";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData.posts)

function App() {
  return (
		<>
    <Header />
			<main>
				<About />
        <ArticleList/>
			</main>
      <Footer />
		</>
  );
}

export default App;
