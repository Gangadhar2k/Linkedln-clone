import React from 'react'
import "./Header.css"
import Logo from '../Assect/linkedin.png'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';

const Header = () => {
  return (
    <div className='header'>
        <div className="header__left">
            <img src={Logo} alt="" />
            <div className="header__search">
                <SearchIcon/>
                <input type="text"  placeholder='Search'/>
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title={"Home"}/>
            <HeaderOption Icon={SupervisorAccountIcon} title={"My Network"}/>
            <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"}/>
            <HeaderOption Icon={ChatIcon} title={"Chat"}/>
            <HeaderOption Icon={NotificationsIcon} title={"Notifications"}/>
            <HeaderOption avatar= "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"title={"Me"}/>
        </div>
    </div>
  )
}

export default Header