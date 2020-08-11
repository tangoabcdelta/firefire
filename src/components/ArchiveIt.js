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
    console.log(Readability);
    return (
      <div className="ArchiveIt">
          <h1>Archive:</h1>
          <Input onEnter={this.cb.bind(this)} /> <Button />
      </div>
    );
  }
  
}

export default ArchiveIt;
