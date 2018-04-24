import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Footer from '../../components/Footer/';
import Sidebar from '../../components/Sidebar/';
import Home from '../../views/Home/Home';
import Breadcrumb from '../../components/Breadcrumb/';

import Auth from './../../services/auth.service';

export default class Full extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
                        <Breadcrumb />
                        <Container fluid>
                          <Switch>
                            <Route path="/home" name="home" component={() => Auth.isAuth ? <Home/> :
                                <Redirect to={'/login'}/>}/>
                            <Redirect from="**" to="/login"/>
                          </Switch>
                        </Container>
                    </main>
                </div>
                <Footer/>
            </div>
        );
    }
}