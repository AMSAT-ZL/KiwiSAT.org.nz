import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Beacon" keywords={[`KiwiSAT`, `New Zealand`]} />
    <p>
      <strong>An Amateur Radio Contribution to Climate Change Research</strong>
    </p>
    <p>
      <strong>KiwiSAT Ionospheric Research Project </strong>
    </p>
    <p>
      <strong> Overview: </strong>
    </p>
    <p>
      Various Satellite Companies are investigating the use of satellite bourn
      radar systems to track such Climate Change parameters as, Biomass
      assessment, Forest inundation, Ice sheet thickness measurement and
      subsurface moisture levels.
    </p>
    <p>
      The most suitable frequencies for these radar systems are in the 400MHz
      region.
    </p>
    <p>
      Improving the measurement accuracy requires a thorough understanding of
      the characteristics of the applicable portion of the ionosphere at these
      frequencies. Currently few satellites carry transmitters producing
      suitable signals for this research, and even fewer that are in suitable
      orbits.
    </p>
    <p>
      The ionospheric characteristics that require investigation are Total
      Electron Content (TEC) and Faraday Rotation.
    </p>
    <div class="image">
      <p>
        <a
          href="images/status09/antenna_z.jpg"
          rel="lightbox[Gallery]"
          title="Lower face with 70 cm Beacon antenna centrally mounted."
        >
          <img
            src="images/status09/antenna_z_s.jpg"
            alt="Lower face with 70cm beacon antenna centrally mounted"
            width="140"
            height="162"
          />
        </a>
        70 cm Beacon Antenna.
      </p>
    </div>
    <p>
      {' '}
      During the construction phase of KiwiSAT the engineering team was
      approached by EADS Astrium* on behalf of Professor Cathryn Mitchell,
      University of Bath, seeking inclusion of a special beacon to provide a
      compatible signal for this ionospheric research. A 470MHz phase-coherent
      beacon was quickly designed and integrated into KiwiSAT to accommodate
      this request.{' '}
    </p>
    <p>
      <strong> Dual Beacon Experiment: </strong>
    </p>
    <p>
      {' '}
      To investigate these signal path characteristics, KiwiSAT will transmit
      two identical, phase locked, signals, one at 145.865 MHz with 1 Watt EIRP
      via an omni-directional circularly polarised antenna, the other on 437.425
      MHz at 100 mW (+20 dBm). This 437 MHz signal is linear polarised via a
      quarter-wave whip antenna on the -Z face of the spacecraft. Both channels
      will carry telemetry at 9600 bps using the International Amateur Radio
      standard AFSK (G3RUH) format.{' '}
    </p>
    <p>
      {' '}
      The comparison of two signals enables extrac­tion of TEC information along
      the signal path, in addition (by measuring the 437MHz signal in both
      polarisations) direct measurement of the degree of Faraday Rotation
      encountered along the same path.
      <strong />
    </p>
    <p>
      <strong> Low Cost Ground Station: </strong>
    </p>
    <p>
      {' '}
      Radio amateurs and satellite enthusiasts around the world will be able to
      participate in the generation and collection of data reporting the results
      via the web to a central point. To assist the many stations involved, the
      KiwiSAT team have developed a receive system using a pair of commercially
      available low cost USB Digital TV receiver ‘dongles’ able to monitor the
      KiwiSAT signal.{' '}
    </p>
    <p>
      {' '}
      These, in conjunction with a laptop computer and a small hand held
      antenna, will provide an inexpensive receiving station with tremendous
      possibilities.{' '}
    </p>
    <p>
      {' '}
      Dedicated individuals and STEM based courses at Colleges and Universities
      at over 1000 sites are already downloading basic telemetry data from other
      satellites in the Amateur Satellite Service using single receivers. The
      addition of a second channel (dongle) plus new custom software to enhance
      their facility will secure a truly global network to support this cutting
      edge Climate Change research.{' '}
    </p>
    <p>
      <em> &nbsp;</em>
    </p>
    <p>
      <em> * Now Airbus Defence and Space. </em>
    </p>
    <p>
      <em> References: </em>
    </p>
    <ul>
      <li>
        <a href="http://www.bbc.com/news/science-environment-36195562">
          <em> http://www.bbc.com/news/science-environment-36195562</em>
        </a>
      </li>
      <li>
        <a href="https://esto.nasa.gov/news/news_EcoSAR_7_2014.html">
          <em> https://esto.nasa.gov/news/news_EcoSAR_7_2014.html</em>
        </a>
        <strong />
      </li>
      <li>
        <em>
          {' '}
          <a href="science_2.htm">
            ‘Radio beacon experiment of the ionosphere.’
          </a>{' '}
          A paper by Mamoru Yamamoto (RISH, Kyoto University){' '}
        </em>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
