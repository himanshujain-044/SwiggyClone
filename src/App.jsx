import "./App.scss";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import CardSpinner from "./components/LoadingSpinners/CardSpinner/CardSpinner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <HomePage />
        {/* <CardSpinner /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
