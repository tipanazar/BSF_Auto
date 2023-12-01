import { Outlet } from "react-router";
import { Header } from "../../Modules/Header/Header";
import { Footer } from "../../Modules/Footer/Footer";

export const LayoutPage = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
