import { Toaster } from "react-hot-toast";
import { Navbar, Hero, Shorten } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Shorten />
      <Toaster />
    </div>
  );
}

export default App;
