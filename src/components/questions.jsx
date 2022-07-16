import React from "react";
import "./questions.css";

class Questions extends React.Component {
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
      done : ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.finale = 0
  }



  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  } 
  //this is very messey sorry
  handleSubmit(event) { 
    this.finale = 0
    if(this.state.question1=="yes") {
      this.finale += 1
    }
    
    if(this.state.question2=="neighbours"||this.state.question2=="kanye east and jayz") {
      this.finale += 1
    }
    if(this.state.question3=="yes") {
      this.finale += 1
    }
    if(this.state.question4=="drench") {
      this.finale += 1
    }
    if(this.state.question5=="never gonna give you up") {
      this.finale += 1
    } 
    if(this.state.question6=="a drive-by"||this.state.question6=="hes alive in serbia") {
      this.finale += 1
    }
    if(this.state.question7=="outcast") {
      this.finale += 1
    }
    if(this.state.question8=="gang of four") {
      this.finale += 1
    }
    if(this.state.question9=="the weekend"||this.state.question9=="vega bay") {
      this.finale += 1
    }
    if(this.state.question10=="average height"||this.state.question9=="vega bay") {
      this.finale += 1
    }
   this.setState(function(state, props) {
     return {
       done:"you scored " + this.finale +"/10"
      };
   });
    event.preventDefault();
  }
//ill find a better way to do this in a bit
  render() {
    return (
      <div>
        <h1>Music Quiz</h1>
        <form onSubmit={this.handleSubmit}>
         <h2>Did john lennon have it coming</h2>
         <h4>yes or no</h4> <input type="text" name="question1"value={this.state.question1} onChange={this.handleChange} /> 
         <h2>Who was in paris?</h2>
         <input type="text" name="question2"value={this.state.question2} onChange={this.handleChange} />
         <h2>Do you like jazz</h2>
         <h4>yes or no</h4><input type="text" name="question3"value={this.state.question3} onChange={this.handleChange} />
         <h2>Best vega bay song:</h2>
         <h4>Spread too thin, Drenched, Badmash or Exhaust</h4><input type="text" name="question4"value={this.state.question4} onChange={this.handleChange} />
         <h2>what is rick ashelys most viewed song</h2>
         <input type="text" name="question5"value={this.state.question5} onChange={this.handleChange} />
         <h2>tupac was killed in a:</h2>
         <h4>Vega bays van, a drive-by or hes alive in serbia</h4><input type="text" name="question6"value={this.state.question6} onChange={this.handleChange} />
         <h2>best rap duo ever</h2>
         <input type="text" name="question7"value={this.state.question7} onChange={this.handleChange} />
         <h3>What band was the greatest influance to flea from RHCP</h3>
         <h4>The rolling stones, Vega bay, Gang of four or Metalica</h4><input type="text" name="question8"value={this.state.question8} onChange={this.handleChange} />
         <h2>most stream artist on spotify</h2>
         <h5>Justin Beber , The Weekend , Vega bay , Outcast or Snoop Dog</h5><input type="text" name="question9"value={this.state.question9} onChange={this.handleChange} />
         <h2>best band ever</h2>
         <h4>Average Height, Vega bay, Gang of four or Metalica</h4><input type="text" name="question10"value={this.state.question10} onChange={this.handleChange} />
         <br></br>
         <input type="submit" value="Submit" />
         <br></br>
         <h1>{this.state.done}</h1>
        </form>
        <h2>Rember no capital letters</h2>
      </div>
    );
  }
}

export default Questions