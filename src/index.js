import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ytSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import 'bootstrap/dist/css/bootstrap.css';

const API_KEY = 'AIzaSyC884aCDQ90pv7Ue8mAiCmmpzgvFYXbKiU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    ytSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  selectVideo(selectedVideo) {
    this.setState({selectedVideo});
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={this.selectVideo.bind(this)}
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('js_root'));