import "./App.css";
import React from "react";
import Image from "./Image.jpeg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Jean Luke",
      bio: "Scientist",
      profession: "Professor",
      show: false,
      imgSrc: Image,
      intervall: null,
      timer:0,
    };
  }
  componentDidMount(){
    this.setState({
      intervall:setInterval(()=>{
        this.setState({timer: this.state.timer+1});
      } ,1000),

    });
  }
  togglesShow = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <div>

      <button onClick={this.togglesShow}> ClickMe</button>
      {this.state.show ? <div><h1>{this.state.fullName}</h1>
      <h3>{this.state.bio}</h3>
      <h2>{this.state.profession}</h2>
      <img src={this.state.imgSrc} alt="myimage
      "></img>
      <h2>{this.state.timer}</h2>
      </div> :"click the button"}

      </div>
    );

  }
}
export default App;

