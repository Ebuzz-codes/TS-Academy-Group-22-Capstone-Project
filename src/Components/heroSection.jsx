import "./HeroSection.css";
import graphics from "../assets/graphics.png";
import Image from "../assets/Image.png";

function Hero() {
  return (
    <>
      <header>
        <nav>
          <img src={graphics} alt="logo" width="120px" height="50px" />
        </nav>

        <section>
          <div className="left">
            <h1 className="hero_header">
              Explore Our Solar <br />
              System Through Data
            </h1>
            <p className="hero_paragraph">
              understanding the planets not just by name, but by measurable
              <br />
              facts. from size and mass to gravity and density, this page <br />
              breaks down the solar system in clear,data and driven way. <br />
            </p>

            <div className="linkbtn">
              <a href="#" className="btn1">
                {" "}
                Explore the data
              </a>
              <a href="#form" id="btn2">
                {" "}
                Contact us
              </a>
            </div>
          </div>

          <div className="right">
            <img src={Image} alt="earth" className="earth" />
          </div>
        </section>
      </header>
    </>
  );
}

export default Hero;
