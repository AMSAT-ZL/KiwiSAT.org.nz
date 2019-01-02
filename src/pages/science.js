import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Science" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2>
      The KiwiSAT &quot;Science Package&quot; -{' '}
      <a href="ADAC_Students.html" target="_blank">
        Massey University Involvement
      </a>
    </h2>
    <h2>ADAC - Atitude Determination And Control</h2>
    <h2>
      This on-board experiment explores aspects of the fine attitude control of
      a small satellite by interaction with the earth's magnetic field.
    </h2>
    <p>
      Originally planned as a dual purpose experiment{' '}
      <em>(to also include a simple ozone measurement tool)</em> it was decided
      to avoid 'splitting the aim' and to concentrate fully on a low cost
      Attitude Determination and Control System.{' '}
    </p>
    <p>
      This, it was thought, would provide a 'safe' (KISS!) but interesting
      objective for a first AMSAT-ZL satellite and would at the same time enable
      us to establish just what level of pointing accuracy could be achieved by
      simple equipment and smart software. <a href="science_1.html">More …</a>{' '}
    </p>
    <div class="image">
      <a
        href="images/Technical/attitude_testrig.gif"
        rel="lightbox[Gallery]"
        title="Bare-bones Magnatorque Attitude Control Test Rig."
      >
        <img
          src="images/attitude_testrig_s.jpg"
          alt="Bare-bones Magnatorque Attitude Control Test Rig"
          width="200"
          height="229"
        />
      </a>
      Magnatorque Test rig.
    </div>
    <p>
      Ground based experiments have demonstrated that the attitude can be
      precision controlled by means of pulsed magnatorquers to enable the unit
      to be rotated at various speeds and stopped in selected directions.{' '}
    </p>
    <p>
      The end aim is to be able to have the on-board computer (IHU) command the
      satellite to adopt a specific attitude.
    </p>
    <p>
      If this can be achieved it opens great possibilities for low-cost low-risk
      satellites which could monitor distant events or enable special
      communications experiments using high gain/narrow beam width antenna.{' '}
    </p>
    <p>
      An advantage of this command ability will be to enable fine control of the
      satellite's spin axis and rate of rotation.
    </p>
    <p>
      <a href="ADAC_Students.html" target="_blank">
        Meet the ADAC experiment development team at Massey University!
      </a>
    </p>
    <p>
      <strong>KiwiSAT Scientific Experiment #2 </strong>
    </p>
    <p>
      <strong>Ionospheric Research Project</strong>
    </p>
    <p align="left">
      <strong> Overview: </strong>
    </p>
    <p>
      {' '}
      By the addition of a 470 MHz beacon phase locked to the 2 metre beacon,
      KiwiSAT will provide a dual coherent beacon system for ionosheric
      reasearch of both the Total Electron Content (TEC) and Faraday Rotation in
      the KiwiSAT to ground path. <a href="beacon.html">More..</a>{' '}
    </p>
    <h3>(2 July 2017)</h3>
  </Layout>
);

export default IndexPage;
