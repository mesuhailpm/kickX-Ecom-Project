import { Outlet } from "react-router-dom";
import { ClientNavbar as Navbar } from "./ClientNavbar";
import Footer from "./Footer";

const ClientSharedHomePage = () => {
  return (
    <div className="client-shared-home-page">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ClientSharedHomePage;
