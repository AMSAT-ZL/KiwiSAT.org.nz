import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="3-Axis Magnetometer" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2>3-Axis Magnetometer</h2>
    <p>
      To measure the magnetic field at any instance, a Honeywell HMR2300 3-axis
      magnetometer will be flown. This has a range of +/- 2 Gauss and a
      resolution of &lt;70 mGauss. A heading resolution of 0.1° is claimed.
    </p>
    <p>
      The data from this, used in conjunction with British and US Geological
      Survey data, is expected to provide good attitude data (5 ° and 10 °
      Lat./Lon resolutions are available using the IGRF field model). Attitude
      changes using the magnetorque coils will be clearly displayed by this
      unit. There are currently no plans to fly permanent magnetic material in
      the satellite but it may be prudent to incorporate some anti-spin high
      permeability rods if it is decided to use a painted strip (Radiometer) to
      induce passive thermal stability spin after the science package
      experiments are completed. That should not affect the magnetometer once it
      is calibrated. An internal calibration system is included in the sensor
      electronics.
    </p>
    <p>
      Readings will need to be time tagged and stored for download on ground
      command.
    </p>
    <p>
      <em>
        [Timing of Magnetometer readings must be controlled to take place
        between magnetorque pulses; an interlock system will be required in the
        software. This is not seen as a particular complication.]
      </em>
    </p>
    <div class="image">
      <p>
        <a
          href="images/Technical/mag_jimbol_2.JPG"
          rel="lightbox[Gallery]"
          title="Honeywell Magnetometer Head Test in Rig Gymbol"
        >
          <img
            src="images/Technical/mag_jimbol_2s.JPG"
            width="250"
            height="188"
          />
        </a>
        Honeywell Magnetometer Head
      </p>
    </div>
    <div class="image">
      <p>
        <a
          href="images/Technical/mag-jimbol_1.JPG"
          rel="lightbox[Gallery]"
          title="Magnetometer Demonstration / Test Rig."
        >
          <img
            src="images/Technical/mag-jimbol_1s.JPG"
            width="250"
            height="188"
          />
        </a>
        Magnetometer Head trial/demonstrator rig.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
