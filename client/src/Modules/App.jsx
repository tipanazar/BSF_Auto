import { Route, Routes } from "react-router";

import { LayoutPage } from "../pages/LayoutPage/LayoutPage";
import { MainPage } from "../pages/MainPage.jsx/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
