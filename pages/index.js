import React from 'react';
import {connect} from "react-redux";
import Link from "next/link";

import {decrementCounter, incrementCounter} from "../redux/actions/counterActions";

class App extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <Link href="/news"><a>News</a></Link>
                </div>
                <div>
                    <h1>Home</h1>
                </div>
                <button onClick={this.props.incrementCounter}>Increment</button>
                <button onClick={this.props.decrementCounter}>Decrement</button>
                <h1>{this.props.counter}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter.value
});

export default connect(mapStateToProps, {incrementCounter, decrementCounter})(App);