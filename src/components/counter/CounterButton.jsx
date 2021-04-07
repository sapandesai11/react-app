import { Component } from "react";
import PropTypes from "prop-types";

class CounterButton extends Component {

    render = () => {
        return (
            <div className="counterDiv">
                <button onClick={() => {this.props.incrementByMethod(this.props.incrementBy)}}>+{this.props.incrementBy}</button>
                <button onClick={() => {this.props.decrementByMethod(this.props.decerementBy)}}>-{this.props.decerementBy}</button>
            </div>
        );
    }

}

CounterButton.defaultProps = {
    incrementBy : 1,
    decerementBy : 1
}

CounterButton.propTypes = {
    incrementBy : PropTypes.number,
    decerementBy : PropTypes.number
}
export default CounterButton;