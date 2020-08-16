import React from 'react'
import './SideBarMenu.scss';
function SideBarMenu({ selected, title, Icon}) {
    return (
        <div className={`sideBarMenu ${selected && 'selected'}`}>
            <Icon />
            <h2>{title}</h2>
        </div>
    )
}

export default SideBarMenu
