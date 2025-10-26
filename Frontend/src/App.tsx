import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Juspay from "./pages/Juspay/Juspay";
import JuspaySde from "./pages/Juspay/components/JuspaySde/JuspaySde";
import ProtectedRoute from "./components/ProtectedRoutes";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import JuspayDeveloper from "./pages/Juspay/components/JuspayDeveloper/JuspayDeveloper";
import JuspayHackA from "./pages/Juspay/components/JuspayHackA/JuspayHackA";
import JuspayHackB from "./pages/Juspay/components/JuspayHackB/JuspayHackB";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/juspay"
          element={
            <ProtectedRoute>
              <Juspay />
            </ProtectedRoute>
          }
        />
        <Route
          path="/juspay/round1"
          element={
            <ProtectedRoute>
              <JuspaySde />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/juspay/round2" element={<JuspayDeveloper />} />
        <Route path="/juspay/round3" element={<JuspayHackA />} />
        <Route path="/juspay/round4" element={<JuspayHackB />} />
        {/* <Route path="/accenture" element={<AccenturePage />} />
        <Route path="/tcs" element={<TcsPage />} />
        <Route path="/infosys" element={<InfosysPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
