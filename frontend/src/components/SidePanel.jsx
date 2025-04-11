import "./SidePanel.css";
import SidePanelButton from "./SidePanelButton.jsx";

function SidePanel({ filterTime, setFilterTime, geoData, isOpen, setIsOpen }) {
  // Extract the unique time options from geoData
  const timeOptions = Array.from(
    new Set(
      geoData.features
        .map((f) => f.properties.parking_time)
        .filter((time) => time !== "")
    )
  ).sort((a, b) => Number(a) - Number(b));

  const handleFilterChange = (e) => {
    const newFilterTime = e.target.value;
    setFilterTime(newFilterTime);
  };

  return (
    <div className={`sidepanel-container ${isOpen ? "open" : "closed"}`}>
      <SidePanelButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      <div className="sidepanel-content">
        <h2>SUODATTIMET</h2>
        <div className="filters-container">
          <select value={filterTime} onChange={handleFilterChange}>
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
