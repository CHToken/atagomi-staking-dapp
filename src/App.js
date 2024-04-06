import StakingPage from "./pages/StakingPage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<StakingPage />} />
      </Routes>
      <Footer />
    </div> 
  );
}

export default App;
