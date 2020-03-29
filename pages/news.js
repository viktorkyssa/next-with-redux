import Link from "next/link";
import {connect} from "react-redux";

const News = props => {
    return (
        <div>
            <Link href="/"><a>Home</a></Link>
            <h1>NEWS</h1>
            <h3>{props.counter}</h3>
        </div>
    )
};

const mapStateToProps = state => ({
    counter: state.counter.value
});

export default connect(mapStateToProps, null)(News);
