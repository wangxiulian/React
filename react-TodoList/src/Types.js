import React, { Component } from 'react';
import PropTypes from 'prop-types';


//propTypes的用法

export default class Types extends Component{
    render(){
        return(
            <div>
                hello{this.prop.type}
            </div>
        );
    }
}

Types.protoTypes = {
    type: PropTypes.bool.isRequired,
    name: PropTypes.oneOfType([PropTypes.bool,PropTypes.string])
}

Types.defaultProps = {
    type: 'num',
    name: 'react'
}
