import React from "react";

const higherOrderComponent = (WrappedComponent) => {
    class HOC extends React.Component{
        state= {
            firstname:"ali"
        }

        handleChange = (event) => {
            this.setState({[event.target.name]:event.target.value})
        }

        render() {
            const {neededProps , ...otherProps} = this.props;

            return(
                <WrappedComponent
                {...neededProps}
                onChange={this.handleChange}
                firstname={this.state.firstname}
                />
            )
        }
    }
    return HOC
}

export default higherOrderComponent