import React from 'react'
import './RecommendVideo.scss';
import VideoCard from './VideoCard/VideoCard';
import { videos } from './videos';
function RecommendVideo() {
    return (
        <div className="recommendVideo">
            <h2>Recommended</h2>
            <div className="recommendVideo__Lists">
                {
                    videos.map((video, index) => (
                        <VideoCard 
                        key={index}
                        link={video.link}
                        image={video.image}
                        avatar={video.avatar}
                        title={video.title}
                        channelName={video.channelName}
                        viewCount={video.viewCount}
                        time={video.time}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default RecommendVideo
