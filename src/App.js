import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Jihed nairi',
        bio: 'high school student',
        imgSrc: 'profile-image.jpg',
        profession: 'student',
      },
      show: false,
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timer } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {show && (
          <div>
            <img src={imgSrc} alt="Profile" />
            <h2>{fullName}</h2>
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}

        <p>Time since component mount: {timer} seconds</p>
      </div>
    );
  }
}

export default App;
