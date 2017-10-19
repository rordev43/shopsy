import React from "react";
import { withRouter } from "react-router-dom";
const queryString = require("query-string");

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps() {
    const parsed = queryString.parse(this.props.location.search);
    if (parsed.search) {
      this.setState({ searchTerm: "" });
    }
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/products?search=${this.state.searchTerm}`);
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          className="search-input"
        />

        <input className="search-btn" type="submit" value="Search" />
      </form>
    );
  }
}
