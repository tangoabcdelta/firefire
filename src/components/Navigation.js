import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <div className="Navigation">
        <ul>
          <li><a tabIndex="0" href="/">Home</a></li>
          <li><a tabIndex="0"href="/projects">Projects</a>
            <ul>
              <li><a tabIndex="0" href="/projects/hook">Hook</a></li>
              <li><a tabIndex="0" href="/projects/inheritance">Inheritance</a></li>
              <li><a tabIndex="0" href="/projects/nesting">Nesting</a></li>
              <li><a tabIndex="0" href="/input">Input</a></li>
              <li><a tabIndex="0" href="/projects/ToDo">ToDo List</a></li>
              <li><a tabIndex="0" href="/projects/tweet-saver">Tweet Saver</a></li>
              <li><a tabIndex="0" href="/projects/archive-it">Archive It!</a></li>
              <li><a tabIndex="0" href="/authorized/archive-it-2">Archive 2</a></li>
              <li>■</li>
              <li><a tabIndex="0" href="/projects/some-project">For future projects</a> &nbsp; 🥰</li>
            </ul>
          </li>
          <li><a tabIndex="0" href="/signIn">Sign In</a></li>
          <li><a tabIndex="0" href="/signup">Sign Up</a></li>
          <li><a tabIndex="0" href="/newsfeed">News Feed</a></li>
          <li><a tabIndex="0" href="/albumfeed">Album Feed</a></li>
          <li>■</li>
          <li><a tabIndex="0"href="/">Demos</a>
            <ul>
              <li><a tabIndex="0" href="/demos/state-demo">State Demo</a></li>
              <li><a tabIndex="0" href="/demos/ajax-demo">Ajax Demo</a></li>
              <li><a tabIndex="0" href="/demos/axios-demo">Axios Demo</a></li>
              <li><a tabIndex="0" href="/demos/thunk-demo">Thunk Demo</a></li>
              <li><a tabIndex="0" href="/authorized/archive-it">Archive [Req. Login]</a> &nbsp; 🥰</li>
            </ul>
          </li>
          <li>■</li>
          <li><a tabIndex="0" href="/sheet1">Sheet One</a></li>
        </ul>
    </div>
  );
}

export default Navigation;
