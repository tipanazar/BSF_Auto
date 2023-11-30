import { Navigate, Route, Routes } from "react-router";

import { LayoutPage } from "../pages/LayoutPage/LayoutPage";
import { MainPage } from "../pages/MainPage.jsx/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
