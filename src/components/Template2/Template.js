import "./Template.css"

function Template ({ path, link, name }) {
  return (
    <div className="blog-container_article">
      <div className="blog-container_article-image">
        <img src={path} />
      </div>
      <div className="blog-container_article-content">
        <h3>{name}</h3>
        {link && 
        <p><a href={link} target='blank'>View more  &#x2197;</a></p>
        }
      </div>
    </div>
  )
}

export default Template;