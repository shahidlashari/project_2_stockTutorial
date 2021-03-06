import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import TrendingErrorInput from '../../components/TrendingErrorInput';
import TrendingErrorAPI from '../../components/TrendingErrorAPI';

class Cryptorating extends Component {
  state = {
    cryptoInput: '',
    isErrorInput: false,
  };

  // Timer to make Input Error text disappear aftr 5 seconds
  componentDidUpdate() {
    setTimeout(() => this.setState({ isErrorInput: false }), 5000);
  }

  handleCryptoChange = (event) => {
    this.setState({ cryptoInput: event.target.value });
  };

  // Cryptocurrencies: Cryptorating Submit Button
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.cryptoInput === '') {
      this.setState({ isErrorInput: true });
    } else {
      this.props.handleCryptoSubmit(this.state.cryptoInput.toUpperCase());
      this.setState({ cryptoInput: '' });
    }
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formCryptoRating">
          <Form.Label>Cryptorating</Form.Label>
          <Form.Control value={this.state.cryptoInput} onChange={this.handleCryptoChange} autoComplete="off" type="text" placeholder="Enter digital currency" />
          {this.state.isErrorInput ? <TrendingErrorInput /> : null }
          {this.props.isErrorCryptoAPI ? <TrendingErrorAPI /> : null}
          <Form.Text className="text-muted">e.g. BTC (Bitcoin), ETH (Ethereum), USDT (Tether), etc.</Form.Text>
        </Form.Group>

        <Button onClick={(e) => this.handleSubmit(e)} variant="dark" type="submit">Submit</Button>
      </Form>
    );
  }
}

export default Cryptorating;
