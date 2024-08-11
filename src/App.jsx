import { Navigate, Route, Routes } from "react-router-dom";
import ColombiaDash from "./views/ColombiaDash";
import NotFound from "./views/notFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/colombia_dash" />} />
      <Route path="/colombia_dash" element={<ColombiaDash />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
