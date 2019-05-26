import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Redux from '../../../store/redux';

import Button from '../../../styles/Button';
import { Container, SignForm } from '../styles';

class SignIn extends Component {
  static propTypes = {
    getAuthRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    console.tron.log(this.props)
    e.preventDefault();

    const { email, password } = this.state;
    const { getAuthRequest } = this.props;

    getAuthRequest(email, password);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <h1>Boas vindas</h1>

          <span>E-MAIL</span>
          <input type="email" name="email" value={email} onChange={this.handleInputChange} />

          <span>SENHA</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />

          <Button size="big" type="submit">
            Entrar
          </Button>
        </SignForm>
      </Container>
    );
  }
}

export default Redux(SignIn);
