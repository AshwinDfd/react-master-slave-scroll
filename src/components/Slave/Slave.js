import React, {Component} from "react";
import PropTypes from "prop-types";


class Slave extends Component {
    constructor (props) {
        super(props);

    }

    componentDidMount () {
        const {setReference} = this.props;

        setReference("slave", this.ref);
        setReference("innerSlave", this.innerSlaveRef);
    }

    render () {
        const {slaveWidthPx, slaveHeightPx, innerSlaveTop, innerSlaveLeft,
            slaveLeft, scrollAnimDuration
        } = this.props;

        let styles = {
            width: slaveWidthPx,
            height: slaveHeightPx,
            position: "fixed",
            marginLeft: slaveLeft,
            overflow: "hidden",
            boxSizing: "border-box"
        };
        let innerStyles = {
            width: "100%",
            position: "relative",
            boxSizing: "border-box",
            transition: "transform "+ scrollAnimDuration +"s linear",
            left: innerSlaveLeft,
            transform: "translateY("+innerSlaveTop+")"
            // top: slaveTop
        };

        return (
            <div ref={el=>{this.ref=el}}
                 style={styles}>
                <div ref={el=>{this.innerSlaveRef=el}}
                    style={innerStyles}
                >
                     {this.props.children}
                </div>
            </div>
        );
    }
}

Slave.propTypes = {
    width: PropTypes.string
};

export default Slave;