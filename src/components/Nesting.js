import React from 'react';

class A extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('componentDidMount: A');
    }

    render() {
        return (
            <div>
                <h1>A</h1>
                <B />
            </div>
        );
    }
}

class B extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('componentDidMount: B');
    }

    render2() {
        return (
            <div>
                <h1>B</h1>
            </div>
        );
    }
    render() {
        return null
    }
}

export { A, B };
export default A;
