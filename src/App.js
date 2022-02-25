import "./App.css";

//COMPONENTS
import Navbar from "./Components/Navbar/Navbar";
import LanguagePicker from "./Components/LanguagePicker/LanguagePicker";

//PAGES
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <LanguagePicker />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
