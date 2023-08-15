import React from "react";
const Subscriptioncard = () => {
  return (
    <div className="modal">
      <form className="form">
        <div className="banner" />
        <label className="title">
          Get<span className="span1">&nbsp;New</span> Customers Faster
        </label>
        <p className="description">description</p>
        <div className="tab-container">
          <button className="tab tab--1">Monthly</button>
          <button className="tab tab--2">Annual</button>
          <div className="indicator" />
        </div>
        <div className="benefits">
          <span>What we offer</span>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                height={16}
                width={16}
              >
                <rect fill="black" rx={8} height={16} />
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="white"
                  d="M5 8.5L7.5 10.5L11 6"
                />
              </svg>
              <span>Grow your customer with our social network tools</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                height={16}
                width={16}
              >
                <rect fill="black" rx={8} height={16} />
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="white"
                  d="M5 8.5L7.5 10.5L11 6"
                />
              </svg>
              <span>Grow your customer with our social network tools</span>
            </li>
          </ul>
        </div>
        <div className="modal--footer">
          <label className="price">
            <sup>$</sup>9<sub>/mo</sub>
          </label>
          <button className="upgrade-btn">Upgrade to PRO Version</button>
        </div>
      </form>
    </div>
  );
};
export default Subscriptioncard;
