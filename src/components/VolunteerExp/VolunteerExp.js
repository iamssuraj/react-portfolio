import Template from '../Template1/Template.js'
import data from './Data.json'
function VolunteerExp () {
    return (
        <div className="features section__padding" id="volunteer">
            <div className="features-heading">
                <h1 className="gradient__text">Volunteer Experience</h1>
                <p> <a href="https://www.linkedin.com/in/iamssuraj/details/volunteering-experiences/" target='_blank'> Please click here, to view my other volunteer experiences. </a></p>
            </div>


            <div className="features-container">
                <div>
                    {
                        data.map((vol, index)=>(
                            <Template key={index} head={vol.head} content={vol.content}/>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default VolunteerExp;
