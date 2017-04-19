import '../styles/search_bar.scss';
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

  onEraseButtonClick() {
    this.onInputChange('');
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 offset-lg-3 mt-3 mb-3">
          <div className="search-bar">
            <div className={this.state.term && 'input-group'}>
              <input
                className="form-control search-bar__input"
                type="text"
                placeholder="Search..."
                autoFocus
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />

              <span
                className={`input-group-addon close ${!this.state.term ? 'd-none' : ''}`}
                onClick={() => this.onEraseButtonClick()}>&times;</span>
            </div>
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
