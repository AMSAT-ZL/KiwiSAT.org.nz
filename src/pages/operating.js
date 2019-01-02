import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Operating" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2>Operating Information for Users.</h2>
    <p>
      Amateur radio will be used for all communications with the satellite. This
      includes Control and Data acquisition, Science experiment Control and
      Reporting.
    </p>
    <p>
      All radio systems will operate in accordance with the requirements of the
      ITU-R Amateur Satellite Service.
    </p>
    <p>
      Both linear and FM amateur radio transponders will be carried and it is
      intended that these will be available in both modes alternatively with
      uplinks in the 70 &amp; 23 cm amateur satellite bands and downlink in the
      2 metre satellite band.{' '}
    </p>
    <p>
      Several beacons will be carried and all will have basic parameters in
      common code. It is intended that all data including that from the science
      experiment will be in a common code format.
    </p>
    <p>
      <a href="freq.html">Click here for planned operating frequencies</a>.{' '}
    </p>
    <h2>Orbit</h2>
    <p>KiwiSAT will fly in a Low Earth Orbit.</p>
    <p>
      The target will be to achieve a launch into a sun-synchronous orbit at an
      altitude of approximately 800km with a period of about 100 minutes.
    </p>
    <h2>Beginners</h2>
    <p>
      If you are a newcomer to satellites then the RSGB RadComm article
      &quot;Getting started on amateur radio satellites&quot; is recommended.
      This is available{' '}
      <a
        href="http://www.uk.amsat.org/images/PDF/Satellites_RadCom_mar07.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      , in PDF form, from AMSAT-UK.
    </p>
  </Layout>
);

export default IndexPage;
