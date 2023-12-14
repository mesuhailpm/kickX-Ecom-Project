import { ClientNavbar as Navbar } from "./ClientNavbar";
import SliderHeader from "./SliderHeader";
import TopBrands from "./TopBrands";
import { PopularCollection as PopCollection } from "./PopularCollectoins";
import TrendingNow from "./TrendingNow";
import AllCollections from "./AllCollections";
import Showrooms from "./Showrooms";
import MemberContainer from "./MemberContainer";
import DiscoverAll from "./DiscoverAll";
import Footer from "./Footer";

const ClientHomePage = () => {
  return (
    <main className="client-home">
      <Navbar />
      <SliderHeader />
      <TopBrands />
      <PopCollection />
      <TrendingNow />
      <AllCollections />
      <DiscoverAll />
      <Showrooms />
      <MemberContainer />
      <Footer />
    </main>
  );
};

export default ClientHomePage;
