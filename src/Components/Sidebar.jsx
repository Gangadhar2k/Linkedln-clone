import { Avatar } from '@mui/material'
import "./Sidebar.css"


const Sidebar = () => {

  const recent = (topic)=>(
   <div className="sidebar__recentItem">
     <div className="sidebar__hash">#</div>
    <p>{topic}</p>
   </div>
  )

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://arka-live.s3.us-east-2.amazonaws.com/uploads/2021/01/header_banner-2.jpg" alt="" />
        <Avatar src='#' className='sidebar__avatar'/>
        <h2>Gangadhar S</h2>
        <h4>reactjs | java | MongoDB</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Connection</p>
          <p className="sidebar__statNumber">
            74
          </p>
        </div>
        <div className="sidebar__stat">
          <p>Who's Viewed your profile</p>
          <p className="sidebar__statNumber">
            51
          </p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
          {recent("ReactJs")}
          {recent('MongoDB')}
          {recent('Java')}
          {recent('Python')}
      </div>
    </div>
  )
}

export default Sidebar