import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <HomePage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
