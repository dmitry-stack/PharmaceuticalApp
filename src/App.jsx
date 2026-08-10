import { MainPanel } from "./components/ui/MainPanel";
import { Layout } from "./layouts/Layout";
import { Tables } from "./features/ui/Tables";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPanel />} />
          <Route path="/tables" element={<Tables />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
