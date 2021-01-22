import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../services/auth.service';
import getOrder from '../services/order.service';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: '' },
      orders: [],
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: '/home' });
    this.setState({ currentUser: currentUser, userReady: true });
    getOrder((res) => {
      console.log(res);
      this.setState({ orders: res });
      console.log(this.orders);
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const { currentUser } = this.state;

    return (
      <div className='container'>
        {this.state.userReady ? (
          <div>
            <header className='jumbotron'>
              <h3>
                <strong>{currentUser.username}</strong> Profile
              </h3>
            </header>
            <p>
              <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)}{' '}
              ...{' '}
              {currentUser.accessToken.substr(
                currentUser.accessToken.length - 20
              )}
            </p>
            <p>
              <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
              <strong>Email:</strong> {currentUser.email}
            </p>
            <strong>Orders:</strong>
            <ul>
              {this.state.orders.map((item) => (
                <div key={item._id}>
                  <h3>{item.username}</h3>
                  <p>Order number: {item.id}</p>
                  <ul>
                    {item.items.map((prod) => (
                      <li key={prod}>{prod}</li>
                    ))}
                  </ul>
                  <p>Price: {item.totalPrice}</p>
                </div>
              ))}
            </ul>
            <p>{currentUser.accessToken}</p>
          </div>
        ) : null}
      </div>
    );
  }
}
