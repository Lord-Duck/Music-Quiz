import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question1: "",
      question2:  "",
      question3:  "",
      question4:  "",
      question5:  "",
      question6:  "",
      question7:  "",
      question8:  "",
      question9:  "",
      question10:  "",
      finale: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    this.setState({finale: this.state.question1}) 
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>do ya like jazz?</h2>
        <input type="text" name="question1"value={this.state.question1} onChange={this.handleChange} />
        <h2>did john lennin have it coming?</h2>
        <input type="text" name="question2" value={this.state.question2} onChange={this.handleChange} />
        <br></br>
        <input type="submit" value="Submit" />
        <h3>{this.state.finale}</h3>
      </form>
    );
  }
}

export default Question