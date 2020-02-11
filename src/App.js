import React ,{Component} from 'react';
import TitlesAndIcons from './sections/TitlesAndIcons'
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection'
import Navigation from './components/Navigation';
import SnowStorm from "react-snowstorm";

import {Link , Element} from "react-scroll"

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      background_first: "#750080",
      background_second: "#02ccbb",
      background_third: "#800020",
      counter: 0
    };
  }
  changeColor = () => {
    let text = ["green", "aqua", "red", "brown"];
    let zamine = ["#461220", "#011f4b", "#251e3e", "#1e1f26"];
    if (this.state.counter > 3) {
      this.setState({
        counter: 0,
        color: text [this.state.counter],
        background_first: " #3c2f2f",
        background_second: " #3c2f2f",
        background_third: " #3c2f2f"
      });
    } else
      this.setState({
        color: text [this.state.counter],
        background_first: zamine[this.state.counter],
        background_second: zamine[this.state.counter],
        background_third: zamine[this.state.counter],
        counter: this.state.counter + 1
      });
  };
  render() {
    return (
      <div className="App">
      <SnowStorm animationInterval = {50} snowCharacter = {"*"} vMaxY={2} vMaxX ={2}/>
        <Element name="Home" className="element" />
        <Navigation background={this.state.background} />
        <div className="changetheme">
          <img onClick={this.changeColor} src="images/color.png" alt="" />
        </div>

      <TitlesAndIcons
      color={this.state.color}
      background={this.state.background_first}

      />
      <AboutSection
       color={this.state.color}
       background={this.state.background_second}
      />
       <SkillSection 
        color={this.state.color}
        background={this.state.background_third}
       />
       <Navigation/>
       <SnowStorm />
     </div>
  );
}
}
export default App;
