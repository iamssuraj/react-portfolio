import Template from '../Template1/Template.js'

function VolunteerExp () {
    return (
        <div className="features section__padding" id="volunteer">
            <div className="features-heading">
                <h1 className="gradient__text">Volunteer Experience</h1>
                <p> <a href="https://www.linkedin.com/in/iamssuraj/details/volunteering-experiences/" target='_blank'> Please click here, to view my other volunteer experiences. </a></p>
            </div>


            <div className="features-container">
                <div>
                    <Template head="Content Creator & Blogger (LinkedIn)" content="I write posts on a wide range of topics, with the goal of engaging my 8000+ followers." />
                    <Template head="Contributing Writer (Quora)" content="I actively write answers on Quora. I have more than 125,000 views." />
                </div>
            </div>

        </div>
    )
}

export default VolunteerExp;
