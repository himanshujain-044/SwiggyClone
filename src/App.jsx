import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <HomePage />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
