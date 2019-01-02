import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Engineering" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2>Design Engineering and Construction </h2>
    <p>
      The design of KiwiSAT is based on the Microsat formula and is basically a
      system of trays clamped together in a box shape. Solar Cells cover the
      exterior to charge the batteries which are the prime power source for all
      on-board systems.
    </p>
    <p>
      Various antenna are mounted on the top and bottom of the satellite it such
      a way as to give an excellent radiation pattern thus reducing signal
      strength variations common in many small satellites.{' '}
    </p>
    <p>
      The satellite systems have been broken down into, Linear Transponder, FM
      Transponder and Command System, Power Supply, On-board Computer
      (Integrated Housekeeping Unit - IHU), Science Package and Structure.
    </p>
    <p>
      Separate teams are developing each part yet maintaining close contact.{' '}
    </p>
    <p>
      {' '}
      The satellite structure and hardware is effectively complete through to
      flight status. Work is now centred on software development - both flight
      and ground station - on the completion of which minor LV integration
      adjustments may be necessary prior to launch.{' '}
    </p>
    <p>
      The antenna configuration developed for best performance limits the choice
      of launch vehicles due to final release requirements. This does not
      significantly limit the launch opportunities neither does it limit the
      choice of a suitable orbit. (<a href="media/fred_dec06.html">Video</a>){' '}
    </p>
    <p>
      Sub-assemblies have been assembled in various centres throughout New
      Zealand making this a truly nation-wide project.
    </p>
    <p>
      Fred Kennedy, ZL1BYP, in his role as lead engineer, has contributed
      significantly to the development and construction of KiwiSAT. Importantly,
      Fred's prior experience in the satellite field, through contributions to
      AO-40 and similar international projects, has proved invaluable. Fred
      continues his dedication to the project.{' '}
    </p>
    <h2>
      <Link to="status">Current Status</Link>
    </h2>
  </Layout>
);

export default IndexPage;
