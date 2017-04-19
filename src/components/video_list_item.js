import '../styles/video_list_item.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {truncate} from 'lodash';

const VideoListItem = props => {
  const {video, onVideoSelect, active} = props;
  const {title, description} = video.snippet;
  const imageUrl = video.snippet.thumbnails.default.url;
  const onVideoClick = selectedVideo => onVideoSelect(selectedVideo);
  const truncatedDescription = truncate(description, {length: 45});

  return (
    <li className={`list-group-item video-list-item media ${active ? 'bg-inverse text-white' : ''}`} onClick={onVideoClick.bind(null, video)}>
      <img className="d-flex mr-3" src={imageUrl} alt={title} />

      <div className="media-body">
        <h6 className="mt-0 mb-1">{title}</h6>
        <span className="small" title={description}>{truncatedDescription}</span>
      </div>
    </li>
  );
};

VideoListItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func,
  active: PropTypes.bool
};

export default VideoListItem;
