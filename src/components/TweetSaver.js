import React from 'react';
import logo from '../logo.svg';
import Input from '../atoms/input.text';
import Button from '../atoms/button';

function TweetSaver() {
  function callback(event) {
      console.log('TweetSaver: cb called');
  }

  return (
    <div className="TweetSaver">
        <h1>Save Tweet </h1>
        <Input onEnter={callback} value={"https://twitter.com/SrBachchan/status/1285985117899558913"} /> <Button />
    </div>
  );
}

export default TweetSaver;
