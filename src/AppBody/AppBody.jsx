import React from 'react'
import './AppBody.scss';
import SideBar from '../SideBar/SideBar';
import RecomdandedVideo from '../RecomdandedVideo/RecomdandedVideo';
function AppBody() {
    return (
        <div className="appBody">
            <SideBar />
            <RecomdandedVideo />
        </div>
    )
}

export default AppBody
