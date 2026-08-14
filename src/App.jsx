import { MainPanel } from "./pages/dashboard/MainPanel";
import { Layout } from "./widgets/layout/Layout";
import { Tables } from "./pages/tables/Tables";
import { Process } from "./pages/process/Process";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPanel />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/process" element={<Navigate to="/tables" replace />} />
          <Route path="/process/:type/:id" element={<Process />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
