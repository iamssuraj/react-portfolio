import Template from '../Template1/Template.js'
import data from './Data.json'
function Certifications() {
    return (
        <div className="features section__padding" id="certifications">
            <div className="features-heading">
                <h1 className="gradient__text">Certifications</h1>
                <p> <a href="https://www.linkedin.com/in/iamssuraj/details/certifications/" target='_blank'> To view more certifications & verify credentials, please click here. </a></p>
            </div>


            <div className="features-container">
                <div>
                    {
                        data.map((cert, index) => (
                            <Template key={index} head={cert.head} content={cert.content} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Certifications;
