import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`KiwiSAT`, `New Zealand`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>KiwiSAT</h1>
    <h3>A New Zealand Satellite</h3>
    <p>
      We are a group of radio amateurs, students, scientists, and engineers that
      have designed, built, and tested a New Zealand satellite. We are now
      actively pursing launch opportunities for a low earth orbit.
    </p>
    <div>
      <h3>Radio</h3>
      <p>
        KiwiSAT carries an amateur radio linear transponder with inputs on 430
        and 1260 MHz and output and beacon on 145 MHz. It also includes a camera
        and digital file transfer capability.
      </p>
    </div>
    <div>
      <h3>Science</h3>
      <p>
        KiwiSAT includes two exciting science experiments: an Ionospheric
        Research Project that allows characterization of the ionosphere to
        improve the accuracy of Earth observations related to climate change and
        an Attitude Determination and Control Subsystem to refine the state of
        the art in small satellite control.
      </p>
    </div>
    <div>
      <h3>Engineering</h3>
      <p>
        The design, fabrication, and eventual operation of the satellite
        involves a wide variety of engineering disciplines from battery
        technology to space frame construction to ground station capability.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
