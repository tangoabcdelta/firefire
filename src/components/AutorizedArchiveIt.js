import React from 'react';
import ArchiveIt from './ArchiveIt';

import logo from '../logo.svg';
import Input from '../atoms/input.text';
import Button from '../atoms/button';


class AutorizedArchiveIt extends ArchiveIt {
    callback(event) {
        console.log(event);
    }

    getPresentationalDetails() {
        const className = 'ArchiveIt Autorized';
        const title = 'Archive';
        return {
            className,
            title
        };
    }
}

export default AutorizedArchiveIt;
