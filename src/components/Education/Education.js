import Template from '../Template1/Template.js';

function Education() {
    return (
        <div className="features section__padding" id="education">
            <div className="features-heading">
                <h1 className="gradient__text">Education</h1>
            </div>

            <div className="features-container">
                <div>
                    <Template head="VNR Vignana Jyothi Institute of Engineering and Technology" content="CGPA: 8.72 (Till 6th semester)" />
                    <Template head="Trinity Junior College" content="Intermediate (12th) Score: 966/1000" />
                    <Template head="Anglo Vedic Convent High School" content="10th CGPA: 9.7/10" />
                </div>
            </div>

        </div>
    )
}

export default Education;
