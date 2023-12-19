import SliderHeader from "./SliderHeader";
import TopBrands from "./TopBrands";
import { PopularCollection as PopCollection } from "./PopularCollectoins";
import TrendingNow from "./TrendingNow";
import AllCollections from "./AllCollections";
import Showrooms from "./Showrooms";
import MemberContainer from "./MemberContainer";
import DiscoverAll from "./DiscoverAll";

const ClientHomePage = () => {
  return (
    <main className="client-home">
      <SliderHeader />
      <TopBrands />
      <PopCollection />
      <TrendingNow />
      <AllCollections />
      <DiscoverAll />
      <Showrooms />
      <MemberContainer />
    </main>
  );
};

export default ClientHomePage;
