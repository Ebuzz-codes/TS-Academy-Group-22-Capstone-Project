import './tableSection.css';

const TableSection = () => {
  return (
    <section class="section4">
      <div className="section4text">
        <h2>Planetary Facts at a Glance</h2>
        <p>
          Below is a comparative table of major planets in our solar system. 
          The data highlights key physical properties used by astronomers and researchers worldwide.
        </p>
      </div>

      <div className="table-container">
        <table className="planet-data-table">
          <caption className="caption">
            Data about the planets of our solar system (Planetary facts taken from Nasa)
          </caption>
          <thead>
            <tr>
              <th colSpan="2"></th>
              <th scope="col">Name</th>
              <th scope="col">Mass(10 24kg)</th>
              <th scope="col">Diameter(km)</th>
              <th scope="col">Density (kg/m3)</th>
              <th scope="col">Gravity(m/s2)</th>
            </tr>
          </thead>
          <tbody>
            {/* Terrestial Planets */}
            <tr>
              <th scope="row" colSpan="2" rowSpan="4">Terrestial Planets</th>
              <td>Mercury</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Venus</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Earth</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Mars</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>

            {/* Jovian Planets */}
            <tr>
              <th scope="row" rowSpan="4">Jovian Planet</th>
              <th scope="row" rowSpan="2">Gas Giants</th>
              <td>Jupiter</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>saturn</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <th scope="row" rowSpan="2">Ice Giants</th>
              <td>Uranus</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Neptune</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>

            {/* Dwarf Planets */}
            <tr>
              <th scope="row" colSpan="2">Dwarf Planets</th>
              <td>Pluto</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableSection;