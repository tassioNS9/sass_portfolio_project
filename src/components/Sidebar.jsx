import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/my.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Tassio Neves" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="src/download/CurriculumTassioNeves.pdf" download="Curriculo Tassio Neves" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
