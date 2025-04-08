import { useState } from "react";
import SidePanelButton from "./SidePanelButton.jsx";
import "./SidePanel.css";

function SidePanel({ filterTime, setFilterTime, geoData }) {
  const [isOpen, setIsOpen] = useState(true);

  const timeOptions = Array.from(
    new Set(
      geoData.features
        .map(f => f.properties.parking_time)
        .filter(time => time !== '')
    )
  ).sort((a, b) => Number(a) - Number(b));

  return (
    <div className={`sidepanel-container ${isOpen ? "open" : "closed"}`}>
      <SidePanelButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      <div className="sidepanel-content">
        <h2>Suodattimet</h2>
        <div className="filters-container">
          <select
            value={filterTime}
            onChange={(e) => setFilterTime(e.target.value)}
          >
            <option value="">Valitse parkkiaika</option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {`${time}min`}
              </option>
            ))}
            <option value="no_time">Ei aikarajoitusta</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
