import React, { useEffect, useState } from "react";
import "./App.css";
import SearchForm from "./container/search-form/search-form";
import FlightsGrid from "./components/flights-grid/flights-grid";

function App(props) {
  const [tasks, setTasks] = useState([]);
  const [flightData, setFlightData] = useState([]);
  const [criteria, setCriteria] = useState({});

  useEffect(() => {
    const getFlights = async () => {
      const tasksFromServer = await fetchFlight();
      setTasks(tasksFromServer);
    };

    getFlights();
  }, []);

  // Fetch flights
  const fetchFlight = async () => {
    const res = await fetch("http://localhost:5000/priceoffers");
    const data = await res.json();

    return data;
  };

  const getCriteria = (data) => {
    setCriteria(data);
    const updatedTasks = tasks.filter(
      (item) =>
        item.origin.trim() === data.origin.trim() &&
        item.destination.trim() === data.destination.trim()
    );

    setFlightData(updatedTasks);
    console.log("updatedTasks", updatedTasks, tasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Flight Search App</h2>
      </header>
      <section className="Main-container">
        <aside className="Search-section">
          <SearchForm getCriteria={getCriteria}></SearchForm>
        </aside>
        <section className="Results-section">
          {flightData && (
            <FlightsGrid flights={flightData} criteria={criteria}></FlightsGrid>
          )}
        </section>
      </section>
    </div>
  );
}

export default App;
