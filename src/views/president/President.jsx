import { getPresidentsByPoliticalParty } from "../../services/presidents";
import useFetchData from "../../hook/useFetchData";
import Card from "../../components/Card/Card";
import SkeletonPresident from "./components/SkeletonPresident/SkeletonPresident";
import PoliticalPartiesTable from "./components/PoliticalPartiesTable/PoliticalPartiesTable";
import "./President.css";
import PeriodMandateTable from "./components/PeriodMandateTable/PeriodMandate";

const President = () => {
  const { data, loading } = useFetchData(getPresidentsByPoliticalParty);

  const { time, sortedParties, totalPresidents, presidents } = data || {};

  return (
    <div>
      {loading ? (
        <SkeletonPresident />
      ) : (
        <>
          <div className="president-container">
            <div className="president-card-container">
              <Card
                title="Número total de presidentes"
                data={`${totalPresidents}`}
              />
              <Card title="Tiempo de respuesta" data={`${time} ms`} />
            </div>
            <div className="president-tables-container">
              <PoliticalPartiesTable
                title="Presidentes Electos por Partido"
                data={sortedParties}
              />
              <PeriodMandateTable
                title="Periodo de Mandato"
                data={presidents}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default President;
