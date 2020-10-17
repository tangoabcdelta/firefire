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

    getPresentationalDetails() {
        const className = 'ArchiveIt';
        const title = 'Archive';
        return {
            className,
            title
        };
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
            <div className={this.getPresentationalDetails().className}>
                <h1>::{this.getPresentationalDetails().title}::</h1>
                <h2>Render Called {window.renderCalled} x times</h2>
                <Input onEnter={this.cb.bind(this)} /> <Button />
                <br />
                <small>
                    <code>
                        {this.getPresentationalDetails().className}
                    </code>
                </small>
            </div>
        );
    }
}

export default ArchiveIt;
