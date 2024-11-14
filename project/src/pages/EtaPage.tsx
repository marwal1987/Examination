import { useLocation, Link } from "react-router-dom";
import { EtaPageState } from "../types"

const EtaPage = () => {
  const location = useLocation();
  const { id, eta } = (location.state as EtaPageState) || {}; // Access id and eta from navigation state

  return (
    <section className="bg-clay text-snow flex flex-col place-items-center">
      <img
        src="src/assets/boxtop.png"
        alt="Picture of a Wonton foodbox"
        width="390px"
        height="362px"
      />
      <div className="flex flex-col place-items-center gap-4 mb-4">
        <h1 className="px-4 text-center font-bold text-[32px] leading-10">
          DINA WONTONS TILLAGAS!
        </h1>
        <p className="font-medium text-[26px]">ETA {eta} MIN</p>
        <p className="font-medium text-[15px]">#{id.toUpperCase()}</p>
      </div>
      <button
        className="bg-transparent border border-snow text-[24px] font-bold rounded  hover:bg-opacity-90 mt-8 mb-4"
        style={{ width: "358px", height: "77px" }}
      >
        SE KVITTO
      </button>
      <Link
        to="/"
        className="text-center content-center bg-coal text-xl font-bold rounded mb-4"
        style={{ width: "358px", height: "77px" }}
      >
        GÖR EN NY BESTÄLLNING
      </Link>
    </section>
  );
};

export default EtaPage;
