import "./header.css"
import myImage from "../../images/Suraj.jpg"

function Header() {
  return (
    <div className="header section_padding" id='home'>

      <div className="header-image">
        <img src={myImage} />
      </div>
      <div className="header-content">
        <h1 className="gradient__text">Hi, I'm Suraj Sanganbhatla</h1>
        <p>I'm a final year student pursuing Bachelor of Technology, at VNR Vignana Jyothi Institute of Engineering and Technology
          (VNRVJIET) specializing in Computer Science and Business Systems.</p>
      </div>
    </div>
  )
}

export default Header;