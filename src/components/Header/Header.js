import "./header.css"
import myImage from "../../images/Suraj.jpg"

function Header() {
  return (
    <div className="header section_padding" id='home'>

      <div className="header-image">
        <img src={myImage} />
      </div>
      <div className="header-content">
        <h1 className="gradient__text">Suraj Sanganbhatla</h1>
        <p>Software Engineer Intern at Zenoti</p>
      </div>
    </div>
  )
}

export default Header;