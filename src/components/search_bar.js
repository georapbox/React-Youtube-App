import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 offset-lg-3 mt-3 mb-3">
          <div className="search-bar">
            <input
              className="form-control"
              type="text"
              placeholder="Search..."
              onChange={event => this.onInputChange(event.target.value)} />
          </div>
        </div>
      </div>

    );
  }
}

SearchBar.propTypes = {
  onSearchTermChange: PropTypes.func
};

export default SearchBar;
