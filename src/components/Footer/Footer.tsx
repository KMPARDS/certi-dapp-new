import React from 'react';
import './Footer.css';
// import cx from 'classnames' ;
export const Footer = () => {
  return (
    <>
      <footer className=" footer_txt_size footer_top_border bg">
        <div className="container contianer_txt_col">
          <div className="row footer-content">
            <div className="col-md-4 contact-detail">
              <a className="navbar-brand" href="/">
                <img
                  src="/images/certidaap_logo.png"
                  width="150px"
                  height="100%"
                  alt="Brand_logo"
                />
              </a>

              <ul className="social-links ul_arrange text_align social-menu">
                <li>
                  <a
                    href="https://www.facebook.com/eraswap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/eraswap/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/eraswap/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>{' '}
                </li>
                <li>
                  <a
                    href="https://twitter.com/EraSwapTech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@eraswap" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-medium"></i>
                  </a>
                </li>
                <li>
                  <a href="https://eraswap.tumblr.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-tumblr"></i>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/eraswap" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-telegram"></i>
                  </a>
                </li>
                <li>
                  {' '}
                  <a href="https://github.com/KMPARDS" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/user/EraSwap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-reddit"></i>
                  </a>{' '}
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCGCP4f5DF1W6sbCjS6y3T1g?view_as=subscriber"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>

              <ul className="ul_arrange text_align">
                <li>
                  <a href="mailto:https://support@certidapp.com">support@certidapp.com </a>
                </li>
              </ul>
              <p className="terms">
                © 2020{' '}
                <a href="https://www.blocklogy.org/" target="_blank" rel="noopener noreferrer">
                  Blocklogy
                </a>{' '}
                All Rights Reserved.
              </p>
            </div>

            <div className="col-md-4 connect-with text_align">
              <p className="heading text_align">Others Links</p>
              <ul className="ul_arrange text_align">
                <li>
                  <a
                    href="https://etherscan.io/address/0x42270341CDca6eE703F98529c3F0C538F5369C2a#code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CERTIÐAPP
                  </a>
                </li>
                <li>
                  {' '}
                  <a
                    href="https://eraswaptoken.io/pdf/eraswap_whitepaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Era Swap Whitepaper
                  </a>
                </li>
                <li>
                  <a
                    href="https://eraswaptoken.io/pdf/es-statuary-warning.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Statuary Warning
                  </a>
                </li>
                <li>
                  <a
                    href="https://eraswaptoken.io/pdf/era-swap-howey-test-letter-august7-2018.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Howey Test
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 term-condition text_align">
              <p className="heading text_align">&nbsp;</p>
              <ul className="ul_arrange text_align">
                <li>
                  <a
                    href="assets/pdf/certidapp-privacy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="assets/pdf/certidapp-audit-report.pdf">Audit Report</a>
                </li>
                <li>
                  <a
                    href="assets/pdf/certidapp-terms-conditions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://eraswaptoken.io/pdf/eraswap-terms-conditions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Era Swap Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
