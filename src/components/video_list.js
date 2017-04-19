import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './video_list_item';

const VideoList = props => {
  const {videos, onVideoSelect, selectedVideo} = props;

  if (!videos.length) {
    return <div></div>;
  }

  const videoItems = videos.map(video => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={onVideoSelect}
        active={selectedVideo.etag === video.etag} />
    );
  });

  return (
    <ul className="col-lg-5 list-unstyled">
      {videoItems}
    </ul>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func,
  selectedVideo: PropTypes.object
};

export default VideoList;
