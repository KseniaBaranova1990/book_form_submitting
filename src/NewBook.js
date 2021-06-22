import React from "react";

class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      key: Date.now(),
      Title: "",
      Author: "",
      Genre: "",
      YearReleased: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    let formData = {};
    formData.key = this.state.key;
    formData.Title = this.state.Title;
    formData.Author = this.state.Author;
    formData.Genre = this.state.Genre;
    formData.YearReleased = this.state.YearReleased;

    setTimeout(() => {
      console.log(formData);
      this.setState({ message: "data sent! " });
    }, 5000);
  }

  render() {
    return (
      <>
        <h1>New Book</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label for="title">Title</label>
            <input
              id="title"
              type="text"
              value={this.state.Title}
              onChange={(e) => this.setState({ Title: e.target.value })}
            />
          </p>
          <p>
            <label for="author">Author</label>
            <input
              id="author"
              type="text"
              value={this.state.Author}
              onChange={(e) => this.setState({ Author: e.target.value })}
            />
          </p>
          <p>
            <label for="genre">Genre</label>
            <input
              id="genre"
              type="text"
              value={this.state.Genre}
              onChange={(e) => this.setState({ Genre: e.target.value })}
            />
          </p>
          <p>
            <label for="first_published">First Published</label>
            <input
              id="first_published"
              type="text"
              value={this.state.YearReleased}
              onChange={(e) => this.setState({ YearReleased: e.target.value })}
            />
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </>
    );
  }
}

export default NewBook;
