import React, { useState, useEffect } from "react";

const imageSection = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanetData = async () => {
      try {
        const response = await fetch(
          "https://anurella.github.io/api/planets.json",
        );
        const data = await response.json();
        setPlanets(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the planet data:", error);
        setLoading(false);
      }
    };

    fetchPlanetData();
  }, []);

  if (loading) return <div className="loading">Loading Universe...</div>;

  return (
    <section className="section3" id="section3">
      <div className="section3text">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>
      </div>

      <div className="grid">
        {planets.map((planet, index) => (
          <figure
            key={index}
            className={`imggrid ${planet.planet.toLowerCase() === "pluto" ? "pluto" : ""}`}
          >
            <img src={planet.image} alt={planet.planet} />
            <div className="planetname">
              <p>{planet.planet}</p>
              <p>{planet.distanceFromSun}</p>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default imageSection;
