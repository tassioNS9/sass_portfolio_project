import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> ,link:"https://www.linkedin.com/in/tassio-neves-santos-51aa59180/" },
  { name: "github", icon: <FaGithub />, link: "https://github.com/tassioNS9" },
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/tassio.neves/" },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
