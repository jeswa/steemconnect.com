import React from 'react';
import { Link } from 'react-router';

export default () => <div className="splash">
  <div className="splash__header">
    <div className="container">
      <img src="/img/logo.svg" height="60" />
    </div>
  </div>
  <div className="splash__body my-5 py-5">
    <div className="container">
      <h1>Identity, authentication, authorization for Steem blockchain’s apps</h1>
      <p>
        SteemConnect is a simple identity layer built on top of the Steem blockchain
        that allows you to connect to authorized apps in a secure and convenient way.
      </p>
      <Link to="/login" className="btn btn-primary">Login</Link>
    </div>
  </div>
  <hr />
  <div className="container py-4">
    <div className="thin">
      <h2 className="py-5">SteemConnect Use cases</h2>
      <div className="my-5 text-left">
        <div className="row">
          <div className="col col-md-2">
            <i className="icon icon-xl material-icons">perm_identity</i>
          </div>
          <div className="col col-md-10">
            <h3>Secure login to authorized Steem apps</h3>
            <p>
              Access to authorized websites and apps with your Steem account credentials
              using mechanisms for robust signing and encryption without giving to
              secure your password/key
            </p>
          </div>
        </div>
      </div>
      <div className="my-5">
        <div className="my-5 text-left">
          <div className="row">
            <div className="col col-md-2">
              <i className="icon icon-xl material-icons">apps</i>
            </div>
            <div className="col col-md-10">
              <h3>SteemConnect App Store</h3>
              <p>
                Select among various websites and apps using SteemConnect where you
                can easily log in with confidence
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <div className="my-5 text-left">
          <div className="row">
            <div className="col col-md-2">
              <i className="icon icon-xl material-icons">code</i>
            </div>
            <div className="col col-md-10">
              <h3>Light Wallet, Activity & Profile Manager</h3>
              <p>Manage your wallet, check your activity on Steem
                and edit your Public Steem Profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr className="mt-5" />
  <div className="container pb-3">
    by <a href="https://busy.org/" target="_blank">@busy.org</a>{ ' ' }
    for <a href="https://steem.io/" target="_blank">Steem</a>
  </div>
</div>;
