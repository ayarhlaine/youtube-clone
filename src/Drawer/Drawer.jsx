import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { useStateValue } from '../Provider';
import { actionTypes } from '../reducer';
import './Drawer.scss';
import DrawerHeader from './DrawerHeader/DrawerHeader';
import DrawerMenu from './DrawerMenu/DrawerMenu';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

function DrawerComponent() {
    const [{isOpenedSideBar}, dispatch] = useStateValue();
    const onDrawerClose = () => {
        dispatch({
            type: actionTypes.UPDATE_SIDEBAR,
            payload: false,
        })
    }
    return (
        <Drawer anchor={'left'} open={isOpenedSideBar} onClose={onDrawerClose} className="drawer">
            <div className="drawer__Container">
                <DrawerHeader />
                <DrawerMenu title="Home" Icon={HomeIcon} selected/>
                <DrawerMenu title="Trending" Icon={WhatshotIcon}/>
                <DrawerMenu title="SubScription" Icon={SubscriptionsIcon}/>
                <hr/>
                <DrawerMenu title="Library" Icon={VideoLibraryIcon}/>
                <DrawerMenu title="History" Icon={HistoryIcon}/>
                <DrawerMenu title="Your videos" Icon={OndemandVideoOutlinedIcon}/>
                <DrawerMenu title="Watch Later" Icon={WatchLaterIcon}/>
                <DrawerMenu title="Liked videos" Icon={ThumbUpAltIcon}/>
                <hr/>
                <DrawerMenu title="Settings" Icon={SettingsIcon}/>
                <DrawerMenu title="Report history" Icon={FlagIcon}/>
                <DrawerMenu title="Help" Icon={HelpIcon}/>
                <DrawerMenu title="Send feedback" Icon={FeedbackIcon}/>
                <hr/>
            </div>
        </Drawer>
    )
}

export default DrawerComponent
