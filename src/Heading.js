import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Heading extends Component {
    render() {
        return(
            <h1>{this.props.message}</h1>
        );
    };

   
}

// Heading.PropTypes = {
//     message: PropTypes.string
// }

Heading.defaultProps = {
    message: 'Heading one'
}
