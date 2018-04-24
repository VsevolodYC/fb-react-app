import React, {Component} from 'react';
import {
    NavbarBrand,
} from 'reactstrap';

export default class Header extends Component {

    render() {
        return (
            <header className="app-header navbar">
                <NavbarBrand href="#"></NavbarBrand>
            </header>
        );
    }
}