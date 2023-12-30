import AnimatedCount from "./sections/animated/AnimatedCount";
import CardCarousel from "./sections/cardCarousel/CardCarousel";
import Faq from "./sections/faq/Faq";
import Footer from "./sections/footer/Footer";
import Navbar from "./sections/navbar/Navbar";
import Subscribe from "./sections/subscribe/Subscribe";
import TopCarousel from "./sections/topcarousel/TopCarousel";
import Upcoming from "./sections/upcoming/Upcoming";

function App() {
  return (
    <>
      <Navbar />
      <TopCarousel />
      <Upcoming />
      <CardCarousel />
      <AnimatedCount />
      <Faq />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
