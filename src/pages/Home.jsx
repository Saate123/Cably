import AppWorks from "../component/AppWorks";
import Download from "../component/Download";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Hero from "../component/Hero";
import HowItWorks from "../component/HowItWorks";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <AppWorks />
      <Download />
      <Footer />
    </div>
  );
}

export default Home;
