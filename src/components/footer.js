import { Link } from 'gatsby';
import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import CCBY from '../images/cc-by.png';

const UpperFooter = styled.div`
  ${tw`bg-grey`};
`;
const LowerFooter = styled.div`
  ${tw`bg-black`};
`;
const PlainList = styled.ul`
  ${tw`list-reset`};
`;

const Footer = () => (
  <>
    <UpperFooter>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <PlainList style={{ columns: 3, marginLeft: 0, marginBottom: 0 }}>
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
        </PlainList>
      </div>
    </UpperFooter>
    <LowerFooter>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <footer style={{ color: `white` }}>
          © 2006~2019 AMSAT-ZL
          <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">
            <img
              style={{ marginBottom: `0`, marginLeft: `1em` }}
              src={CCBY}
              alt="Available under a Creative Commons Attribution 4.0 International License"
            />
          </a>
        </footer>
      </div>
    </LowerFooter>
  </>
);

export default Footer;
