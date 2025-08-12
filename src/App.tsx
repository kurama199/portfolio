import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/Pages/Home";
import { NotFound } from "@/Pages/NotFound";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer newestOnTop={true} position="bottom-right" />
    </BrowserRouter>
  );
}

export default App;
