import React from "react";

class Question extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert( this.props.question + ": " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>
          {this.props.question}
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </h2>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Question


