import './Extracurricular.css'

import Template from '../Template2/Template.js';
import EDCell from '../../images/ED-Cell.JPG';
import SIHImg from "../../images/SIH.jpeg";
import TuringHut from "../../images/TuringHut.jpg";
import ShortFilmImg from "../../images/ShortFilm.jpeg";
import MuleSoftImg from "../../images/MuleSoft.jpg";

function ExtracurricularSection() {
  return (
    <div className="extracurricular__section section__padding" id="extracurriculars">
      <div className="extracurricular__heading">
        <h1 className="gradient__text">
          Clubs & Extracurriculars!
        </h1>
      </div>
      <div className="extracurricular__container">
        <div className="extracurricular__container_groupA">
          <Template path={SIHImg} link="https://drive.google.com/drive/folders/1dIrE-PK2_OhE558dARAJSpgKERsQ_GkR?usp=sharing" name="Anchor - Smart India Hackathon Event" />
        </div>
        <div className="extracurricular__container_groupB">
          <Template path={MuleSoftImg} link="https://drive.google.com/drive/folders/1X5zy6yIXAjZa7b61XTfNfckVj_h5YNJY" name="Host - An event on MuleSoft" />
          <Template path={EDCell} link="https://drive.google.com/drive/folders/1lWuocC5Sr_OpZw7PlSULt2sJTL7rqF8J?usp=drive_link" name="Chief Executive - Entrepreneurship Development Cell" />
          <Template path={TuringHut} link="https://drive.google.com/drive/folders/11yAp2XEBvXs7kXAiPO8UferGjrldIxU6?usp=drive_link" name="Editor in Chief - Turing Hut (Coding Club)" />
          <Template path={ShortFilmImg} link="https://drive.google.com/drive/folders/1Lg8NzlZCeAq0txYvcslFgGVrGLaICvtC?usp=drive_link" name="Actor - VJ Teatro (Shortfilm Club)" />
        </div>

      </div>
    </div>
  );
}

export default ExtracurricularSection;
