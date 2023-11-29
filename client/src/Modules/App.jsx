import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";

import { LayoutPage } from "../pages/LayoutPage/LayoutPage";
import { MainPage } from "../pages/MainPage.jsx/MainPage";
import { getMakes } from "../redux/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMakes());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
