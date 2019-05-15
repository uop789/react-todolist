import React, { Component } from 'react';

class Count extends Component {

    render () {
        return (
            <div className="flow-right controls">
                <span>Item count: <span id="item-count">{this.props.itemsCount}</span></span>
                <span>Unchecked count: <span id="unchecked-count">{this.props.uncheckedCount}</span></span>
            </div>
        )
    }
}

export default Count;