import { useState } from "react";
import { TAB_DATA, TABS } from "../constants/tab";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Tab from "../components/Tab/Tab";
import Airport from "./airport/Airport";
import President from "./president/President";
import TouristicAttractions from "./touristicAttractions/TouristicAttractions";

const ColombiaDash = () => {
  const [activeTab, setActiveTab] = useState(TABS.PRESIDENT);

  return (
    <main>
      <Header />
      <Layout>
        <div className="tab-container">
          {TAB_DATA.map(({ key, title }) => (
            <Tab
              key={key}
              title={title}
              isActive={activeTab === key}
              showTab={() => setActiveTab(key)}
            />
          ))}
        </div>
        <Layout>
          {activeTab === TABS.PRESIDENT && <President />}
          {activeTab === TABS.TOURISTIC_ATTRACTIONS && <TouristicAttractions />}
          {activeTab === TABS.AIRPORT && <Airport />}
        </Layout>
      </Layout>
    </main>
  );
};

export default ColombiaDash;
