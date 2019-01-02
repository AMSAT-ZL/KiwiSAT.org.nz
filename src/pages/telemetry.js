import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Telemetry" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2>Telemetry</h2>
    <div class="image">
      <p>
        <a
          href="images/Technical/Tel_BCR.jpg"
          rel="lightbox[Gallery]"
          title="Sample screen output from Telemetry program. Real data from ground testing."
        >
          <img
            src="images/Technical/Tel_BCR_s.jpg"
            alt="BCR Telemetry Display"
            width="140"
            height="90"
          />
        </a>{' '}
        BCR - Battery Display
      </p>
    </div>
    <p>
      Telemetry - The KiwiSAT-TLM Telemetry Decoder Ground Station software is
      now being tested. Here is a screen shot of the BCR - Battery page showing
      data from KiwiSAT ground testing.
    </p>
    <p>Further page shots will be added shortly.</p>
    <p>
      If you are interested in evaluating KiwiSAT-TLM please contact the program
      <a href="mailto:osbornes@paradise.net.nz" target="_blank">
        Author
      </a>
    </p>
  </Layout>
);

export default IndexPage;
