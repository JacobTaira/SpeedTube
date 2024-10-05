"use client";

import React, { useState } from 'react';
import VideoBlock from './VideoBlock';

interface Video {
    title: string;
    channel: string;
    views: string;
    timestamp: string;
    thumbnailUrl: string;
}

const VideoRecommendations: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([
        {
            title: 'Video 1',
            channel: 'Channel 1',
            views: '1M views',
            timestamp: '2 days ago',
            thumbnailUrl: 'https://img.youtube.com/vi/7sNaH3bTuHw/hqdefault.jpg',
        },
        {
            title: 'Video 2',
            channel: 'Channel 2',
            views: '2M views',
            timestamp: '3 days ago',
            thumbnailUrl: 'https://img.youtube.com/vi/7sNaH3bTuHw/hqdefault.jpg',
        },
    ]);
    
    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, title: string) => {
        event.dataTransfer.setData('text/plain', title); // Set the dragged video title
    };

    return (
        <div 
        className="w-full">
            <h2 className="text-xl font-bold text-white mb-2">Recommended Videos</h2>

            <div className="space-y-1">
                {videos.map((video) => (
                <VideoBlock 
                key={video.title}
                title={video.title}
                channel={video.channel}
                views={video.views}
                timestamp={video.timestamp}
                thumbnailUrl={video.thumbnailUrl}
                onDragStart={handleDragStart} // Pass the drag start handler
                />
                ))}
            </div>
        </div>
    );
  };
  
  export default VideoRecommendations;