import Template from '../Template1/Template.js';
import data from './Data.json'
function Education() {
    return (
        <div className="features section__padding" id="education">
            <div className="features-heading">
                <h1 className="gradient__text">Education</h1>
            </div>

            <div className="features-container">
                <div>
                    {
                        data.map((edu, index) => (
                            <Template key={index} head={edu.head} content={edu.content} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Education;
