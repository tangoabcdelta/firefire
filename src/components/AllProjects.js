import React from 'react';
import './AllProjects.css';

function AllProjects() {
  return (
    <div className="AllProjects">
      <h1>All Projects</h1>


      <h2>demos</h2>
      <ul className="flex-container wrap">
        <li><a tabIndex="0" href="/demos/state-demo">State Demo</a></li>
        <li><a tabIndex="0" href="/demos/ajax-demo">Ajax Demo</a></li>
        <li><a tabIndex="0" href="/demos/axios-demo">Axios Demo</a></li>
        <li><a tabIndex="0" href="/demos/thunk-demo">Thunk Demo</a></li>
        <li><a tabIndex="0" href="/projects/inheritance">Inheritance 1</a></li>
        <li><a tabIndex="0" href="/projects/nesting">Nesting</a></li>
        <li><a tabIndex="0" href="/404">Render Props 0</a></li>
        <li><a tabIndex="0" href="/404">Render Props 1</a></li>
        <li><a tabIndex="0" href="/404">HOC 1</a></li>
        <li><a tabIndex="0" href="/404">DownShift</a></li>
      </ul>

      <h2>StandAlone Apps</h2>
      <ul className="flex-container wrap">
        <li><a tabIndex="0" href="/projects/ToDo">ToDo List</a></li>
        <li><a tabIndex="0" href="/projects/tweet-saver">Tweet Saver</a></li>
        <li><a tabIndex="0" href="/projects/archive-it">Archive 1</a></li>
        <li><a tabIndex="0" href="/authorized/archive-it">Archive [Req. Login]</a> &nbsp; 🥰</li>
        <li><a tabIndex="0" href="/authorized/archive-it-2">Archive 2</a></li>
      </ul>
      <h2>...</h2>
      <ul className="flex-container wrap">
        <li><a tabIndex="0" href="/signIn">Sign In</a></li>
        <li><a tabIndex="0" href="/signup">Sign Up</a></li>
        <li><a tabIndex="0" href="/newsfeed">News Feed</a></li>
        <li><a tabIndex="0" href="/albumfeed">Album Feed</a></li>
      </ul>

      <h2>...</h2>

      <ul className="flex-container wrap">
        <li><a tabIndex="0" href="/projects/home">Home 0</a></li>
        <li><a tabIndex="0" href="/projects/hook">Hook 0</a></li>
        <li><a tabIndex="0" href="/input">Input</a></li>
      </ul>

      <h2>The End</h2>
    </div>
  );
}

export default AllProjects;


