import './styles/main222.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ytSearch from 'youtube-api-search';
import {debounce} from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC884aCDQ90pv7Ue8mAiCmmpzgvFYXbKiU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('masha and the bear');
  }

  selectVideo(selectedVideo) {
    this.setState({selectedVideo});
  }

  videoSearch(term) {
    ytSearch({key: API_KEY, term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const debouncedVideoSearch = debounce(term => this.videoSearch(term), 300);

    return (
      <div className="container-fluid">
        <h1 className="text-center mt-3 h2">React Youtube Player</h1>

        <SearchBar onSearchTermChange={debouncedVideoSearch} />

        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />

          <VideoList
            onVideoSelect={this.selectVideo.bind(this)}
            videos={this.state.videos}
            selectedVideo={this.state.selectedVideo} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('js_root'));
