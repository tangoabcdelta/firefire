import React from 'react';
import logo from '../logo.svg';
import Input from '../atoms/input.text';
import Button from '../atoms/button';

function AutorizedArchiveIt() {
  function callback(event) {
      console.log(event);
  }

  return (
    <div className="ArchiveIt Autorized">
        <h1>[Autorized] Archive:</h1>
        <Input onenter={callback} /> <Button />
    </div>
  );
}

export default AutorizedArchiveIt;
