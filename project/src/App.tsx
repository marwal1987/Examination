import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import EtaPage from "./pages/EtaPage";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col h-[844px] w-[390px] mx-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/eta" element={<EtaPage />} />
      </Routes>
      </main>
    </>
  );
};

export default App;