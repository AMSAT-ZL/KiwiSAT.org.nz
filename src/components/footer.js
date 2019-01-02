import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = () => (
  <>
    <div
      style={{
        background: `darkgray`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <ul style={{ listStyle: `none`, columns: 3 }}>
          <li>
            <Link to="3_axis">3 Axis Control</Link>
          </li>
          <li>
            <Link to="ADAC">ADAC</Link>
          </li>
          <li>
            <Link to="beacon">Beacon</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="engineering">Engineering</Link>
          </li>
          <li>
            <Link to="frequencies">Frequencies</Link>
          </li>
          <li>
            <Link to="funding">Funding</Link>
          </li>
          <li>
            <Link to="horizon_sensor">Horizon Sensor</Link>
          </li>
          <li>
            <Link to="launch">Launch</Link>
          </li>
          <li>
            <Link to="links">Links</Link>
          </li>
          <li>
            <Link to="media">Media</Link>
          </li>
          <li>
            <Link to="operating">Operating</Link>
          </li>
          <li>
            <Link to="orbit">Orbit</Link>
          </li>
          <li>
            <Link to="science">Science</Link>
          </li>
          <li>
            <Link to="sponsors">Sponsors</Link>
          </li>
          <li>
            <Link to="status">Status</Link>
          </li>
          <li>
            <Link to="sun_sensor">Sun Sensor</Link>
          </li>
          <li>
            <Link to="telemetry">Telemetry</Link>
          </li>
          <li>
            <Link to="trials">Trials</Link>
          </li>
        </ul>
      </div>
    </div>
    <div
      style={{
        background: `black`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <footer style={{ color: `white` }}>© 2006~2018 AMSAT-ZL</footer>
      </div>
    </div>
  </>
);

export default Footer;
