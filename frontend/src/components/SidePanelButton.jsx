import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"; 
import "./SidePanel.css";

function SidePanelButton({ isOpen, toggle }) {
  return (
    <button
      className="toggle-button"
      onClick={toggle}
      style={{ right: isOpen ? "-20px" : "-50px" }}
      aria-label="Avaa tai sulje kartan suodatinvalikko"
    >
      <FontAwesomeIcon 
        icon={isOpen ? faCircleArrowLeft : faCircleArrowRight} 
        className="duotone-icon"
      />
    </button>
  );
}

export default SidePanelButton;
