import './App.css';
import image from './logo.svg';
import React from 'react';

class App extends React.Component {
  state = { 
    counter: 0 ,
    person:{
      fullName: "Mohamed Ashaibi",
      bio: "This is the bio",
      imgSrc: image,
      profession:"Profession"
    },
    show: false,
  };

  incrementCounter() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  changeShow = () => {
    this.setState({
      show: !this.state.show
    });
  }

  componentDidMount() {
    const thisBoundedIncrementer = this.incrementCounter.bind(this);
    setInterval(thisBoundedIncrementer, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.show && 
        <div className="profile-info">
          <img src={this.state.person.imgSrc} alt="ok"/>
          <h1>{this.state.person.fullName}</h1>
          <h3>{this.state.person.profession}</h3>
          <p>{this.state.person.bio}</p>
        </div>
        }
        <div className="counter">
          <h1>Counter</h1>
          <h2>{this.state.counter}</h2>
        </div>
        <button onClick={this.changeShow}>okok</button>
      </div>
    );
  }
}

export default App;