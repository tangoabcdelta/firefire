import React from 'react';
import './Footer.css';


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="Footer">
        <small>
          Copyright © 2020 by congenial-doodle.herokuapp.com All Rights Reserved.  
        </small>
      </footer>
    );
  }
}

export default Footer;
