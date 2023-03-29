import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import SearchRestaurant from "./components/SearchRestaurant/SearchRestaurant";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchRestaurant />} />
          <Route path="*" element={<HomePage />} red/>
        </Routes>

        {/* <HomePage />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
