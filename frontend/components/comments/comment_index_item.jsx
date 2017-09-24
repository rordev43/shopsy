import React from 'react';

export default class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body,
      editButton: ""
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  handleEdit(e) {
    e.preventDefault();
    const comment = Object.assign(
      {},
      { body: this.state.body },
      { productId: this.props.productId },
      { id: this.props.comment.id }
    );
    this.props.updateComment(comment);
    this.setState({ editButton: "" });
  }

  handleChange(e) {
    this.setState({
      body: e.target.value,
      editButton: <button onClick={this.handleEdit}>Edit</button>
    });
  }

  commentItem() {
    let comment;
    if (this.props.comment.user_id === this.props.currentUserId) {
      comment = <div><textarea
        value={this.state.body}
        onChange={this.handleChange}
        />
      <button onClick={this.handleDelete}>Delete</button>
      {this.state.editButton}
      </div>;
    } else {
      comment = <textarea value={this.props.comment.body} readOnly/>;
    }
    return comment;
  }

  render() {
    return(
      <div>
        {this.commentItem()}
      </div>
    );
  }

}
