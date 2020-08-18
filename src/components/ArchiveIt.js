import React from 'react';
import logo from '../logo.svg';
import Input from '../atoms/input.text';
import Button from '../atoms/button';


class ArchiveIt extends React.Component {
  constructor(props) {
    super(props);
  }
  
  cb(event) {
    // console.log('State Change Fired');
  }

  render() {
    window.setTimeout(() => {
        console.log(window.Readability);
        if (window.renderCalled) {
            window.renderCalled++
        } else {
            window.renderCalled = 1;
        }; 
    }, 0)
    return (
      <div className="ArchiveIt">
          <h1>Archive:Render Called {window.renderCalled} x times</h1>
          <Input onEnter={this.cb.bind(this)} /> <Button />
      </div>
    );
  }
  
}

export default ArchiveIt;
