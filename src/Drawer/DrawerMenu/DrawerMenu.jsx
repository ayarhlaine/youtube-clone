import React from 'react'
import './DrawerMenu.scss';
import { IconButton } from '@material-ui/core';

function DrawerMenu({ selected, Icon, title}) {
    return (
        <div className={`drawerMenu ${selected && 'selected'}`}>
            <IconButton>
                <Icon />
            </IconButton>
            <h2>{title}</h2>
        </div>
    )
}

export default DrawerMenu
