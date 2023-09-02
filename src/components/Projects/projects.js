import Template from '../Template1/Template';
function Projects() {
  return (
    <div className="features section__padding" id="projects">
      <div className="features-heading">
        <h1 className="gradient__text">Projects</h1>
        <p>You can click on the title of the project, to open it.</p>
      </div>

      <div className="features-container">
        <div>
          <Template head="Portfolio Webiste (New version)" content="This is the same website that you're looking at. Built this website in around 1.5 months using ReactJS." />
          <Template head="Phished URL Detection using 1D CNN and LSTM" link="https://github.com/iamssuraj/Phished-URL-Detection-System"
            content="Developed a Phished URL detection system using a model architecture consisting of 1D CNN and LSTM layers, achieving an accuracy of around 95%." />

          <Template head="Interactive Lung Cancer Detection System" link="https://github.com/iamssuraj/Interactive-Lung-Cancer-Detection-System"
            content="Built an interactive lung cancer detection system using multiple
            Machine Learning algorithms such as Logistic Regression, DT, SVM, KNN, Random Forest, and Naive Bayes and
            ANN on a dataset from Kaggle, achieving a combined accuracy of 94.6183%." />

          <Template head="Portfolio Website(Old version)" link="https://iamssuraj-old.netlify.app/"
            content="This is the first version of my portfolio, designed and developed this responsive portfolio website that highlights my education,
            experience, projects, and skills. Used HTML, CSS, a little JavaScript and Bootstrap." />

          <Template head="FLAMES Website" link="https://flamesbysuraj.netlify.app/"
            content="Designed and developed a responsive website to demonstrate the ’FLAMES’ game, which
            predicts a hypothetical relationship between two people, using HTML, CSS and JavaScript." />
        </div>
      </div>

    </div>
  )
}

export default Projects;
