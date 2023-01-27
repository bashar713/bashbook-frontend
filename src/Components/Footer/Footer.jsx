import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Self-Help</span>
          <span>Business</span>
          <span>Communication</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <sapn>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            eligendi maiores facilis ex consequuntur? Tempore, dolorem quibusdam
            et sunt libero eveniet quaerat? Quia nobis soluta molestias ipsa
            corporis hic architecto nisi quos aliquid vitae?
          </sapn>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <sapn>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            eligendi maiores facilis ex consequuntur? Tempore, dolorem quibusdam
            et sunt libero eveniet quaerat? Quia nobis soluta molestias ipsa
            corporis hic architecto nisi quos aliquid vitae?
          </sapn>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">BASHBOOKS</span>
          <span className="copyright">&copy; Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
}
