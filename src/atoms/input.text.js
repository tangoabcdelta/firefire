import React from 'react';
import './input.text.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    //this.value = "https://twitter.com/SrBachchan/status/1285985117899558913";
    //this.handleClick = this.handleClick.bind(this);
    //this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEnter.bind(this);
  }
  
  getInitialState() {
    return {
        windowWidth: window.innerWidth
    };
  }

  handleResize(e) {
    this.setState({windowWidth: window.innerWidth});
    this.props.resize && this.props.resize(e);
  }

  componentDidMount() {
    // window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.handleResize);
  }

  handleClick(e) {
    // console.log('handleClick', e);
  }
  
  handleKeyDown(e) {
    // console.log('handleKeyDown-or-handleChange-or-handleKeyPress', e.keyCode, e);

    if (e.keyCode == 13) {
      this.handleEnter(e);
    }
    this.props.onChange && this.props.onChange(e);
    this.props.onKeyPress && this.props.onKeyPress(e);
  }
    
  handleEnter(e) {
    //console.log('handleEnter', e.target[0], e.currentTarget, e);
    // console.log('handleEnter', e.target);
    this.setState({
      message: e.target.value,
      info: 'You pressed the enter key!'
    });
    this.props.onEnter && this.props.onEnter(e);
  }
  
  render() {
    return (
      <span className="Input">
        <input
            tabIndex="0"
            // onChange={this.handleKeyDown.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
            onClick={this.handleClick.bind(this)}
            type="text"
            defaultValue={this.props.defaultValue}
            placeholder={this.props.placeholder}
        />
        { this.state.message ? <code className="Alert Info" style={{'color':'blue'}}>{this.state.message}</code> : null }
        { this.state.info ? <code className="Alert Info" style={{'color':'red'}}>{this.state.info}</code> : null }
        { this.state.error ? <code className="Alert Error">Field Error: {this.state.error}</code> : null }
        { this.state.warning ? <code className="Alert Warning">Warning: {this.state.info}</code> : null }
      </span>
    );
  }

}

export default Input;
