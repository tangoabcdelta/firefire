import React from "react";
class Projects extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Projects">
        <ul>
          <li><a tabIndex="0" href="/input">Input</a></li>
          <li><a tabIndex="0" href="/projects/ToDo">ToDo List</a></li>
          <li><a tabIndex="0" href="/projects/tweet-saver">Tweet Saver</a></li>
          <li><a tabIndex="0" href="/projects/archive-it">Archive It!</a></li>
          <li>■</li>
          <li><a tabIndex="0" href="/projects/some-project">For future projects</a> &nbsp; 🥰</li>
          <li>■</li>
          <li><a tabIndex="0" href="/projects/fats">Fat Database</a></li>
        </ul>
        
        <hr />
        <ul>
          <li><a tabIndex="0" href="/demos/state-demo">State Demo</a></li>
          <li><a tabIndex="0" href="/demos/ajax-demo">Ajax Demo</a></li>
          <li><a tabIndex="0" href="/demos/axios-demo">Axios Demo</a></li>
          <li><a tabIndex="0" href="/demos/thunk-demo">Thunk Demo</a></li>
          <li><a tabIndex="0" href="/authorized/archive-it">Archive [Req. Login]</a> &nbsp; 🥰</li>
        </ul>
        <hr />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Projects;
