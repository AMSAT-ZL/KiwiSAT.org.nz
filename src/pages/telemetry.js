import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import telemetryScreenShot from '../images/technical/Tel_BCR_s.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Telemetry" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2>Telemetry</h2>
    <div
      style={{
        width: '325px',
        marginBottom: '1.45em',
      }}
    >
      <img
        src={telemetryScreenShot}
        alt="Sample screen output from Telemetry program. Real data from ground testing."
        width="325"
        height="210"
        style={{ marginBottom: `0` }}
      />
      <span style={{ fontStyle: `italic` }}>
        BCR - battery display during ground testing
      </span>
    </div>
    <p>
      Telemetry - The KiwiSAT-TLM Telemetry Decoder Ground Station software is
      now being tested. Here is a screen shot of the BCR - Battery page showing
      data from KiwiSAT ground testing.
    </p>
    <p>Further screen shots will be added shortly.</p>
    <p>
      <a href="/papers/KiwiSAT-CW2.pdf">
        CW Beacon Telemetry Display Documentation
      </a>
    </p>
    <p>
      If you are interested in evaluating KiwiSAT-TLM please contact the
      program's <a href="mailto:zl2bac@amsat.org">author</a>.
    </p>
  </Layout>
);

export default IndexPage;
