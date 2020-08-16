import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import './DrawerHeader.scss';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../Provider';
function DrawerHeader() {
    const [{isOpenedSideBar}, dispatch] = useStateValue();
    const onMenuClick = () => {
        dispatch({
            type: actionTypes.UPDATE_SIDEBAR,
            payload: !isOpenedSideBar,
        });
    };
    return (
        <div className="drawerHeader">
             <IconButton onClick={onMenuClick}>
                    <MenuIcon />
            </IconButton>
            <div className="drawerHeader__logo">
                <img src={`${process.env.PUBLIC_URL}/images/youtube-logo.png`} alt="Youtube Logo"/>
            </div>
        </div>
    )
}

export default DrawerHeader
