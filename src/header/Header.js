import React from 'react';
import './Header.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-header">
                {this.props.headerText}
            </div>
        );
    }
}

export default Header