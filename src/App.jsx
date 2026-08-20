import { MainPanel } from "./pages/dashboard/MainPanel";
import { Layout } from "./widgets/layout/Layout";
import { Tables } from "./pages/tables/Tables";
import { Process } from "./pages/process/Process";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./app/providers/toast/ToastProvider";
import { TOAST_MESSAGES } from "@/shared/consts/messages";

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPanel />} />
            <Route path="/tables" element={<Tables />} />
            <Route
              path="/process"
              element={
                <Navigate
                  to="/tables"
                  replace
                  state={{
                    toastMessage: TOAST_MESSAGES.SELECT_PRODUCT,
                    toastDescription: TOAST_MESSAGES.SELECT_PRODUCT_DESCRIPTION,
                  }}
                />
              }
            />
            <Route path="/process/:type/:id" element={<Process />} />
          </Route>
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}
export default App;
