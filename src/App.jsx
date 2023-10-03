import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/Homepage";
import HotelPage from "./pages/HotelPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/hotel/:index" element={<HotelPage />} />
      </Routes>
    </div>
  );
}

export default App;
