import { useState } from "react";
import "./SidePanel.css";

function SidePanel() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidepanel-container ${isOpen ? "open" : "closed"}`}>
      <button
        className="toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        style={{ right: isOpen ? "-15px" : "-70px" }}
      >
        <span className={`arrow ${isOpen ? "left" : "right"}`}></span>
      </button>

      <h2>Suodattimet</h2>
      <p>Pian käytössä!</p>
    </div>
  );
}

export default SidePanel;
