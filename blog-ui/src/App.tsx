import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Auth from "./pages/Auth";
import { ToastProvider } from "./hooks/useToast";

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
