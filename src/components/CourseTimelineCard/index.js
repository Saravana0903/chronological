// Write your code here
import './index.css'

const CourseTimelineCard = props => {
  const {cardDetails} = props
  const {courseTitle, description, duration, tagsList} = cardDetails
  return (
    <div className="course-card">
      <div className="header">
        <h1 className="course-head">{courseTitle}</h1>
        <p>{duration}</p>
      </div>
      <div>
        <p className="para">{description}</p>
      </div>
      <ul className="footer">
        {tagsList.map(tag => (
          <p className="list-ele">{tag.name}</p>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
