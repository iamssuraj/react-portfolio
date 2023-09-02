import Template from '../Template1/Template';

function Experience () {
    return (
        <div className="features section__padding" id="experience">
            <div className="features-heading">
                <h1 className="gradient__text">Experience</h1>
            </div>

            <div className="features-container">
                <div>
                    <Template head="Amazon ML Summer School (Apprenticeship)" content="I was selected for Amazon ML Summer School, an integrated learning program for students on key Machine Learning (ML) topics." />
                    <Template head="Entrepreneurship Cell, IIT Bombay (Internship)" content="Enacted as the face of E-Cell, IIT Bombay in my campus, representing the company’s mission of developing the idea of entrepreneurship." />
                    <Template head="CodeInPlace - Stanford (Apprenticeship)" content="Code in Place is an introductory programming course using the Python language, based on material from the first half of Stanford University’s established intro course, CS106A." />
                </div>
            </div>

        </div>
    )
}

export default Experience;
