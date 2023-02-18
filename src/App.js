import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ViewArea from "./components/ViewArea";
import AreaOfBooking from "./components/AreaOfBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin-view" element={<ViewArea />} />
        <Route exact path="/booking-page" element={<AreaOfBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
