import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="listnames">
        <h3>About</h3>
        <p>This project was collaboratively designed and developed by:<strong> <a href="https://github.com/Ebuzz-codes">Ebube,</a> <a href="https://github.com/Gabstrong"> Freedom,</a> <a href="https://github.com/dimex002">Fawaz,</a> <a href="https://github.com/kennyfaola-coder">Kehinde,</a> <a href="https://github.com/Lasunkanmi26">Rachel,</a><a href="https://github.com/Denie-art">Emmanuella,</a> <a href="https://github.com/teenah11"> Augustina, </a> <a href="https://github.com/essalami">Simisola,</a></strong> combining our skills and expertise to deliver a functional and user-focused solution. </p>
      </div>
      
      <div className="about">
        <p className="links"> 
          ©2026 Design by <a href="https://amakandukwu.com/">Amaka</a> &nbsp;&amp;&nbsp; 
          <a href="https://www.linkedin.com/in/ifeomaokocha">Ifeoma A.</a> 
          <a href="https://github.com/Ebuzz-codes/TS-Academy-Group-22-Capstone-Project.git"> TS Academy Phoenix Group 22.</a> All rights reserved
        </p>

        <p>
          <a href="https://tsacademyonline.com/">TSAcademy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;