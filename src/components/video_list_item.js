import React from 'react';
import PropTypes from 'prop-types';
import '../styles/video_list_item.css';

const VideoListItem = props => {
  const {video, onVideoSelect} = props;
  const {title} = video.snippet;
  const imageUrl = video.snippet.thumbnails.default.url;
  const onVideoClick = selectedVideo => onVideoSelect(selectedVideo);

  return (
    <li className="list-group-item video-list-item" onClick={onVideoClick.bind(null, video)}>
      <div className="video-list media">
        <img className="d-flex mr-3" src={imageUrl} alt={title} />

        <div className="media-body">
          <h6 className="mt-0">{title}</h6>
        </div>
      </div>
    </li>
  );
};

VideoListItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func
};

export default VideoListItem;
