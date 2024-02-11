import { Outlet } from "react-router-dom";
import { ClientNavbar as Navbar } from "./ClientNavbar";
import Footer from "./Footer";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const ClientSharedHomePage = () => {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  return (
    <div style={{ marginTop: "7em" }} className="client-shared-home-page">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
      {scrollTop && (
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="goup"
        >
          <FaArrowUp className="gouparrow" />
        </div>
      )}
    </div>
  );
};

export default ClientSharedHomePage;
