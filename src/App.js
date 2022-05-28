import { Toaster } from "react-hot-toast";
import { Navbar, Hero, Shorten, Stats, Features, CTA, Footer } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Shorten />
      <Stats />
      <Features />
      <CTA />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
