import Header from "../components/Header/Header";
import Tab from "../components/Tab/Tab";

const ColombiaDash = () => {
  return (
    <main>
      <Header />
      <div className="tab-container">
        <Tab title="Presidentes" />
        <Tab title="Aeropuertos" />
        <Tab title="Atracciones turísticas" />
      </div>
    </main>
  );
};

export default ColombiaDash;
