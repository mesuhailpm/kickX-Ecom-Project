import { Outlet } from "react-router-dom";
import { ClientNavbar as Navbar } from "./ClientNavbar";
import Footer from "./Footer";
import { FaArrowUp } from "react-icons/fa";

const ClientSharedHomePage = () => {
  return (
    <div style={{ marginTop: "7em" }} className="client-shared-home-page">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
      {window.innerHeight > 1000 ? (
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="goup"
        >
          <FaArrowUp className="gouparrow" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ClientSharedHomePage;
