// Part 1: The Function (The "Factory")
import React, { useState, useEffect } from 'react';
const imageSection = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanetData = async () => {
      try {
        // The API endpoint found in your Capstone instructions
        const response = await fetch('https://anurella.github.io/api/planets.json');
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
    <section className="section3">
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
          /* 
             We use the 'figure' tag as required by the PDF.
             We add a conditional class for Pluto so your CSS '.pluto' rule still works.
          */
          <figure 
            key={index} 
            className={`imggrid ${planet.planet.toLowerCase() === 'pluto' ? 'pluto' : ''}`}
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



// Part 3: The Export (The "Delivery Label")
// This is the most important line for Step 1!
export default imageSection;