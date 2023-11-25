import { Outlet } from "react-router";
import { Header } from "../../Modules/Header/Header";

export const LayoutPage = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <h2>footer</h2>
    </>
  );
};
