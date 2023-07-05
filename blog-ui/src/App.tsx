import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Auth from "./pages/Auth";
import { ToastProvider } from "./hooks/useToast";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
