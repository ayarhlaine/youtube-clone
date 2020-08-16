import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { useStateValue } from '../Provider';
import { actionTypes } from '../reducer';
import './Drawer.scss';
import DrawerHeader from './DrawerHeader/DrawerHeader';

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
                <hr/>
            </div>
        </Drawer>
    )
}

export default DrawerComponent
