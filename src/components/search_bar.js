import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2 mt-3 mb-3">
          <div className="search-bar">
            <input
              className="form-control"
              type="text"
              placeholder="Search..."
              onChange={this.onInputChange.bind(this)} />
          </div>
        </div>
      </div>

    );
  }
}

export default SearchBar;
