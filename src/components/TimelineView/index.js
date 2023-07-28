// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="main-con">
      <div className="con-1">
        <h1>MY JOURNEY OF CCBP 4.0</h1>
      </div>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(eachItem => {
          if (eachItem.categoryId === 'COURSE') {
            return <CourseTimelineCard cardDetails={eachItem} />
          }
          return <ProjectTimelineCard cardDetails={eachItem} />
        })}
      </Chrono>
    </div>
  )
}
export default TimelineView
