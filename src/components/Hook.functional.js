import React, {useState} from 'react';

export const A = (props) => {
    return null;
}

export const B = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>B</h1>
            <button onClick={
                () => {
                    setCount(count)
                }
            }> Click Me {count} </button>
        </div>
    );
}
//     constructor(props) {
//         super(props);
//         this.state = {};
//         this.count = 0;
        
//     }

//     handleClick = (event) => {
//         console.log(`target`, event.target, event.target.nodeName);
//         console.log(`target innerText: ${event.target.innerText}`);
//         this.count += 1;
//         this.setState({
//             // foo: this.count,
//             // [Math.random()]: Math.random()
//         });
//     }

//     componentDidMount() {
//         console.log(`componentDidMount: ${this}`);
//     }

//     render() {
//         return null
//     }
// }

// class B extends A {
//     constructor(props) {
//         super(props);
//     }

//     render() {
        
//     }

// }

// export { A, B };
// export default B;
