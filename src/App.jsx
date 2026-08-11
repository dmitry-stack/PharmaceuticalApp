import { MainPanel } from "./components/ui/MainPanel";
import { Layout } from "./layouts/Layout";
import { Tables } from "./features/ui/Tables";
import { Process } from "./features/ui/Process";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPanel />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/process/:type/:id" element={<Process />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
