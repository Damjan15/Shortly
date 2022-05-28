import { Toaster } from "react-hot-toast";
import { Navbar, Hero, Shorten, Stats, Features } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Shorten />
      <Stats />
      <Features />
      <Toaster />
    </div>
  );
}

export default App;
