import Template from '../Template1/Template.js'
function Certifications() {
    return (
        <div className="features section__padding" id="certifications">
            <div className="features-heading">
                <h1 className="gradient__text">Certifications</h1>
                <p> <a href="https://www.linkedin.com/in/iamssuraj/details/certifications/" target='_blank'> To view more certifications & verify credentials, please click here. </a></p>
            </div>


            <div className="features-container">
                <div>
                    <Template head="Introduction to LLMs" content="Google Cloud (Coursera)" />
                    <Template head="Machine Learning" content="Stanford Online" />
                    <Template head="Leaders of Learning" content="HardvardX" />
                </div>
            </div>

        </div>
    )
}

export default Certifications;
