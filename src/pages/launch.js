import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Launch" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2>Launch into Orbit </h2>
    <p>
      <a href="https://www.rocketlabusa.com/">
        <img
          src="images/RL_Flight.jpg"
          alt="Rocket Labs"
          width="124"
          height="306"
        />
      </a>
      Early planning pointed towards ISC Kosmatras for a DNEPR launch in mid to
      late 2012. That time has passed and ride costs have escalated. More
      recently consideration has been given to a Great Wall of China launch
      opportunity.{' '}
    </p>
    <p>
      The prospect of an all New Zealand operation with Rocket Lab is now a
      tempting option making for a true South Pacific effort.{' '}
    </p>
    <p>
      KiwiSAT has been teetering on the brink of launch for far too long.
      Resources have been committed to the two engineering items, solar cell
      mounting and assembly of a new flight battery pack.
    </p>
    <p>
      The Team won't say &quot;By Christmas&quot; as there's still work to do.
      That Flight Battery Pack will take almost 5 months to create, every cell
      must be individually tested for compatibility to ensure longest life of
      the whole pack thus maximising useful life in orbit.
    </p>
    <p>[5 July 2017]</p>
  </Layout>
);

export default IndexPage;
