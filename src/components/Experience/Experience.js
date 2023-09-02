import Template from '../Template1/Template';
import data from './Data.json'
function Experience () {
    return (
        <div className="features section__padding" id="experience">
            <div className="features-heading">
                <h1 className="gradient__text">Experience</h1>
            </div>

            <div className="features-container">
                <div>
                    {
                        data.map((exp, index)=>(
                            <Template head={exp.head} content={exp.content} key={index}/>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Experience;
