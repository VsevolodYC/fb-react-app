import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="app-footer">
                <span><a href="https://genesisui.com">Clever</a> &copy; 2018 creativeLabs.</span>
                <span className="ml-auto">Powered by ME!</span>
            </footer>
        )
    }
}