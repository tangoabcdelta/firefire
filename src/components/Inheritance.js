import React from 'react';

class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.count = 0;
        
    }

    handleClick = (event) => {
        console.log(`target`, event.target, event.target.nodeName);
        console.log(`target innerText: ${event.target.innerText}`);
        this.count += 1;
        this.setState({
            // foo: this.count,
            // [Math.random()]: Math.random()
        });
    }

    componentDidMount() {
        console.log(`componentDidMount: ${this}`);
    }

    render() {
        return null
    }
}

class B extends A {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>B inherited A</h1>
                <button onClick={this.handleClick}> Click Me {this.count} {this.state.foo} </button>
            </div>
        );
    }

}

export { A, B };
export default B;
