import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="ADAC" keywords={[`KiwiSAT`, `New Zealand`]} />
    <p>
      <em>
        Thanks to a grant from the NZART Radioscience Education Trust{' '}
        <strong>Dr Johan Potgieter</strong> has launched the ADAC Science
        Experiment project with five students from the School of Engineering and
        Advanced Technology on the Albany Campus of Massey University.
      </em>
    </p>
    <h2>ADAC</h2>
    <div>
      <a
        href="images/Technical/ADAC activity2_L.jpg"
        rel="lightbox[Gallery]"
        title="Masters student Kirill Makarov and Dr Jon Henderson work out the basic approach to the ADAC challenge."
      >
        <img
          src="images/Technical/ADAC activity2_s.jpg"
          alt="Dr Jon Henderson "
          width="140"
          height="105"
        />
      </a>{' '}
      Dr Jon Henderson
    </div>
    <p>
      The Science ADAC (Attitude Determination And Control) package to be
      carried by KiwiSAT has been significantly enhanced and advanced by
      additional support from Massey University.
      <br />
    </p>
    <p>
      Five students from the School of Engineering and Advanced Technology on
      the Albany Campus - under the supervision of Lecturer in Robotics, Dr
      Johan Potgieter - are now working with the KiwiSAT team towards the goal
      of orbital experimentation and research.
    </p>
    <div>
      <a
        href="images/Technical/ADAC team2.jpg"
        rel="lightbox[Gallery]"
        title=" ADAC Student Team. (Left to Right) Travers,(Magnetometer), Utsav (Horizon Sensors), Thomas (CMOS Camera) and Andrew (Sun Sensors)."
      >
        <img
          src="images/Technical/ADAC team2_s.jpg"
          alt="ADAC Student Team"
          width="140"
          height="104"
        />
      </a>{' '}
      ADAC Massey Team
    </div>
    <p>
      {' '}
      We welcome Masters student Kirill Makarov and 4th Year Degree students
      Travers Biddle, Utsav Patel, Thomas Poupouara and Andrew Webb who joined
      the Massey ADAC team earlier this year.
    </p>
    <p>
      {' '}
      Kirill will team up with Dr Jon Henderson on the flight dynamics aspects
      whilst the sensor package will be integrated, tested and calibrated by
      Travers, Utsav, Thomas and Andrew.
    </p>
    <p>
      Development has commenced on this vital KiwiSAT scientific experiment
      fulfilling a dream of the KiwiSAT team.{' '}
    </p>
    <div>
      <a
        href="images/Technical/ADAC team_b.jpg"
        rel="lightbox[Gallery]"
        title=" Travers, Utsav, Thomas  and Andrew have begun the long task of designing the software to maniplate the results from the various sensors and use the information to control the attituide of the satellite."
      >
        <img
          src="images/Technical/ADAC team_b_s.jpg"
          alt="ADAC Team at work"
          width="140"
          height="85"
        />
      </a>{' '}
      ADAC Team at work.
    </div>
    <p>
      The University's support is a huge boost for this international KiwiSAT
      project. AMSAT-ZL look forward to continued co-operation with Massey
      University and trust this will be a challenging and satisfying project for
      both the students and the University.
    </p>
    <p>
      Being an ongoing orbital experiment, much of the work cannot be
      implemented or verified until KiwiSAT is launched and has settled down in
      orbit. That event is eagerly anticipated.
    </p>
  </Layout>
);

export default IndexPage;
