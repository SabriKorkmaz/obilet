
import React, { Component } from 'react';
class Error extends Component {

    render() {
        const errorText = this.props.errorText;
        const errorStatus = this.props.error
        if (errorStatus) {
            return (
                <div className="alert alert-danger">
                    <strong>Hata!</strong> {errorText}
                </div>
            );
        }
        else {
            return ("");
        }

    }
}

export default Error;