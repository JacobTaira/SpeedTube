import React from 'react';

interface VideoBlockProps {
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  thumbnailUrl: string;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, title: string) => void;
}

const VideoBlock: React.FC<VideoBlockProps> = ({ title, channel, views, timestamp, thumbnailUrl, onDragStart}) => {
  return (
    <div 
        draggable
        onDragStart={(event) => onDragStart(event, title)} // Call the onDragStart function
        className="flex space-x-4 p-2 rounded hover:bg-[#292929] transition duration-200"
    >
      <img src={thumbnailUrl} width={'25%'} alt={title} className="h-23 rounded"/>
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-xs text-gray-400">{channel}</p>
        <p className="text-xs text-gray-500">{views} • {timestamp}</p>
      </div>
    </div>
  );
};

export default VideoBlock;