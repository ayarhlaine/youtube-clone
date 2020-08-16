import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './Header.scss';
function Header() {
    return (
        <div className="header">
            <div className="headerLeft">
                <img src={`${process.env.PUBLIC_URL}/images/youtube-logo.png`} alt="Youtube Logo"/>
            </div>
            <Hidden smDown>
                <div className="headerSearch">
                    <input placeholder="Search" type="text" name="search" id="search"/>
                    <SearchIcon />
                </div>
            </Hidden>
            <div className="headerIcons">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar className="headerIcons__Avatar" alt="Ayar Hlaine" src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} />
            </div>
        </div>
    )
}

export default Header
