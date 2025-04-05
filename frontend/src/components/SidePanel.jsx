import { useState } from "react";
import SidePanelButton from "./SidePanelButton.jsx"; // Import the new component
import "./SidePanel.css";

function SidePanel() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidepanel-container ${isOpen ? "open" : "closed"}`}>
      <SidePanelButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      <h2>Suodattimet</h2>
      <div className="filters-container">
        <p style={{"color": "red"}}>Filteröinti pian käytössä!</p>
        <select name="selectList" id="selectList" defaultValue='default'>
          <option value="default">Valitse parkkiaika</option>
          <option value="option 1">15min</option>
          <option value="option 2">1h</option>
          <option value="option 3">2h</option>
        </select>
      </div>
    </div>
  );
}

export default SidePanel;
