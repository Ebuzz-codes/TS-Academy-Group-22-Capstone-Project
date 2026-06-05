import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="listnames">
        <h3>About</h3>
        <p>This project was collaboratively designed and developed by:<strong> <a href="https://github.com/Ebuzz-codes" target='_blank'>Ebube</a>, <a href="https://github.com/Gabstrong" target='_blank'> Freedom</a>, <a href="https://github.com/dimex002" target='_blank'>Fawaz</a>, <a href="https://github.com/kennyfaola-coder" target='_blank'>Kehinde</a>, <a href="https://github.com/Lasunkanmi26" target='_blank'>Rachel</a>, <a href="https://github.com/Denie-art" target='_blank'>Emmanuella</a>, <a href="https://github.com/teenah11" target='_blank'>Augustina</a>, <a href="https://github.com/essalami" target='_blank'>Simisola</a></strong>, combining our skills and expertise to deliver a functional and user-focused solution. </p>
      </div>
      
      <div className="about">
        <p className="links"> 
          <a href="https://www.linkedin.com/in/ifeomaokocha" target='_blank'>Ifeoma A.</a> 
          <a href="https://github.com/Ebuzz-codes/TS-Academy-Group-22-Capstone-Project.git" target='_blank'> TS Academy Phoenix Group 22.</a> All rights reserved
        </p>

        <p>
          <a href="https://tsacademyonline.com/" target='_blank'>TSAcademy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;