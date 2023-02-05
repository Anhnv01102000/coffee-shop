import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSlide from "./components/HeroSlide";
import Place from "./components/Place";
import Product from "./components/Product";
import Special from "./components/Special";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <HeroSlide />
        <Special />
        <Product />
        <Place />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

export default App;
