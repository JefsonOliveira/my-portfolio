import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects";

const Home = () => {
  return <div>
    <NavBar />
    <Hero />
    <About />
    <Projects />
    <Footer />
  </div>;
};

export default Home;
