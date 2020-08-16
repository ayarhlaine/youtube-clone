import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import './VideoCard.scss';
function VideoCard({ link, image, title, channelName, avatar, viewCount, time}) {
    return (
        <a className="videoCard" href={link} target="_blank" rel="noopener noreferrer">
            <img className="videoCard__thumbnail" src={image} alt={title}/>
            <div className="videoCard__info">
                {/* <Avatar className="headerIcons__Avatar" alt="Ayar Hlaine" src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} /> */}
                <Avatar className="headerIcons__Avatar" alt="Ayar Hlaine" src={avatar} />
                <div className="videoCard__text">
                    <h3 className="videoCard__title">
                        {title}
                    </h3>
                    <p className="videoCard__channelName">{channelName}</p>
                    <p className="videoCard__detail">
                        { viewCount } views . {time}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default VideoCard
