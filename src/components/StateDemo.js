import React from "react";

class StateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.headerStyle = {
      color: 'white',
      fontSize: '48px'
    }
  }

  render() {
    let count = this.state.count; 
    setTimeout(() => {
      count++;
      this.setState({
        count: count 
      });
    }, 1000)
    return (
      <div>
        <h1 style={this.headerStyle}>{this.props.name}</h1>
        <code>this.props.time <span>{this.props.time}</span></code>
        <br />
        <code>this.state.time <span>{this.state.count}</span></code>
      </div>
    );
  }
}

export default StateDemo;
