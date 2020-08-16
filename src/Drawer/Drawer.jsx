import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { useStateValue } from '../Provider';
import { actionTypes } from '../reducer';
import './Drawer.scss';

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
            <p>Drawer</p>
        </Drawer>
    )
}

export default DrawerComponent
