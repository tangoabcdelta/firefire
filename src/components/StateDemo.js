import React from "react";

class StateDemo extends React.Component {
  constructor(props) {
    super(props);
    window.StateDemo = window.StateDemo || { renderCount: 0 };
    this.headerStyle = {
      color: 'white',
      fontSize: '48px'
    }
  }

  render() {
    
    window.StateDemo.renderCount++;

    return (
      <div>
        <label>Add text to the textbox on the top corner</label>
        <h1 style={this.headerStyle}>{this.props.name}</h1>
        <code>this.props.time <span>{this.props.time}</span></code>
        <br />
        <code>No. of times rendered called: <span>{window.StateDemo.renderCount}</span></code>
      </div>
    );
  }
}

export default StateDemo;
