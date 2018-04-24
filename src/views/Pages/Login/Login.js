import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import Auth from "../../../services/auth.service";

export default class Login extends Component {

    state = {
        password: '',
        username: '',
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({[name]: value});
    }

    login = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('emailAddress', this.state.username);
        formData.append('password', this.state.password);

        fetch(
            'http://localhost:1337/api/v1/entrance/login',
            {
                method: 'PUT',
                body: formData,
                credentials: 'same-origin'
            })
            .then(res => {
                if (res.ok) {
                    document.cookie += res.cookie;
                }
                return res.json();
            })
            .then(data => {
                if (data && data.token) {
                    Auth.token = data.token;
                    Auth.setAuth(true);
                    this.props.history.push("/home");
                }
            });
    }

    render() {
        const {username, password} = this.state;

        return (
            <div className="app flex-row align-items-center">
                <Container>
                  <Row className="justify-content-center">
                    <Col md="4">
                      <CardGroup className="mb-4">
                        <Card className="p-4">
                          <CardBody>
                            <h1>Login</h1>
                            <p className="text-muted">Sign In to your account</p>
                            <InputGroup className="mb-3">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="icon-user"></i>
                                </span>
                              </div>
                              <Input type="text" placeholder="Username" value={username} id="username" name="username" onChange={this.handleChange}/>
                            </InputGroup>
                            <InputGroup className="mb-4">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="icon-lock"></i>
                                </span>
                              </div>
                              <Input type="password" placeholder="Password" value={password} id="password" name="password" onChange={this.handleChange}/>
                            </InputGroup>
                            <Row>
                              <Col xs="6">
                                <Button color="primary" className="px-4" onClick={this.login}>Login</Button>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </CardGroup>
                    </Col>
                  </Row>
                </Container>
            </div>
        );
    }
}