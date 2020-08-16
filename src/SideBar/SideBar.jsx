import React from 'react'
import './SideBar.scss';
import SideBarMenu from './SideBarMenu/SideBarMenu';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import IconButton from '@material-ui/core/IconButton';
import { useStateValue } from '../Provider';
import { actionTypes } from '../reducer';
function SideBar() {
    const [{isOpenedSideBar}, dispatch] = useStateValue();
    const onMenuClick = () => {
        dispatch({
            type: actionTypes.UPDATE_SIDEBAR,
            payload: !isOpenedSideBar,
        });
    };
    return (
        <div className="sidebar">
            <div className="sidebar__MenuContainer">
                <IconButton onClick={onMenuClick}>
                    <MenuIcon />
                </IconButton>
            </div>
            <SideBarMenu title="Home" Icon={HomeIcon} selected/>
            <SideBarMenu title="Trending" Icon={WhatshotIcon}/>
            <SideBarMenu title="SubScription" Icon={SubscriptionsIcon}/>
            <SideBarMenu title="Library" Icon={VideoLibraryIcon}/>
        </div>
    )
}

export default SideBar
