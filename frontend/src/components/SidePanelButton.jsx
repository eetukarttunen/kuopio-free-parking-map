import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./SidePanel.css";

function SidePanelButton({ isOpen, toggle }) {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
    }
  }, [isOpen]);

  return (
    <div className="button-container">
      <button
        className="toggle-button"
        onClick={toggle}
        style={{ right: isOpen ? "-20px" : "-50px" }}
        aria-label="Avaa tai piilota kartan suodatinvalikko"
      >
        <FontAwesomeIcon
          icon={isOpen ? faCircleArrowLeft : faCircleArrowRight}
          className="duotone-icon"
        />
        <span className={`tooltip-text ${showTooltip ? "visible" : ""}`}>
          {isOpen ? "Sulje suodatinvalikko" : "Kokeile suodattimia"}
        </span>

      </button>
    </div>
  );
}

export default SidePanelButton;
