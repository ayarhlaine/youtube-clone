import React from 'react'
import './AppBody.scss';
import SideBar from '../SideBar/SideBar';
import RecommendVideo from '../RecommendVideo/RecommendVideo';
function AppBody() {
    return (
        <div className="appBody">
            <SideBar />
            <RecommendVideo />
        </div>
    )
}

export default AppBody
