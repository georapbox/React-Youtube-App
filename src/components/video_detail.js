import React from 'react';
import PropTypes from 'prop-types';
import '../styles/video_detail.css';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div className="col-md-8 text-center">Loading...</div>;
  }

  const {title, description} = video.snippet;
  const {videoId} = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="video-detail__details">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.object
};

export default VideoDetail;
