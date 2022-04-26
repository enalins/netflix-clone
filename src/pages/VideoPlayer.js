import React from 'react'
import './VideoPlayer.css';

const VideoPlayer = () => {
  return (
    <>
      <iframe className="videoPlayer__video" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1&modestbranding=1&rel=0&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  )
}

export default VideoPlayer;