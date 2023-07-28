// Write your code here
import './index.css'

const ProjectTimelineCard = props => {
  const {cardDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = cardDetails
  return (
    <div className="pro-card">
      <div>
        <img src={imageUrl} className="icon" alt="project" />
      </div>
      <div className="header">
        <h1 className="pro-head">{projectTitle}</h1>
        <p className="pro-para">{duration}</p>
      </div>

      <div>
        <p className="para">{description}</p>
      </div>

      <a href={projectUrl} target="_blank" rel="noreferrer">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
