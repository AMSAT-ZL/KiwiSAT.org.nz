import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import VHFGroup from '../images/VHF_Group.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Project Funding" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2>Project Funding </h2>
    <p class="tiny">
      <em>
        (<em>Unless stated otherwise, a</em>ll values are given in New Zealand
        Dollars.)
      </em>
    </p>
    <p class="tiny">
      <em>
        <strong>AMSAT-ZL</strong> gratefully acknowledges the many sponsors who
        have assisted with services or hardware
      </em>
      .
    </p>
    <p>
      This project was funded by radio amateurs through personal and club
      donations, and by membership of AMSAT-ZL.
    </p>
    <p>
      It is pleasing to see the &quot;Kiwi Ingenuity&quot; achieving so much
      from what, in space project terms, is so little.
    </p>
    <h3>30 August 2016 </h3>
    <p>
      It is pleasing to report that with the generosity of so may groups and
      individuals both in New Zealand and around the world we have been able to
      complete the development and construction to flight-ready operational
      status.{' '}
      <em>
        (See <Link to="status">Status</Link>)
      </em>
    </p>
    <p>
      Outstanding are final integration, vacuum chamber testing
      <em>(unfortunately not available in Auckland)</em>, software development,
      registration and launch. It is currently anticipated that suitable vacuum
      chambers will be available in Christchurch. This will mean some additional
      travel cost as transporting the integrated structure is a significant
      expense either in the purchase of a seat and/or an expensive freight box.
    </p>
    <p>
      To date the project has cost approximately NZ$45,000 with all hardware
      required to complete KiwiSAT in hand. Ahead of us is the relatively huge
      cost of the launch which involves not just the cost of the launch itself
      but the necessary support and required travel.
    </p>
    <p>
      AMSAT-ZL is confident that a sponsor can be found who will ensure our
      KiwiSAT flies.
    </p>
    <h3>Solar Cell Special Funding</h3>
    <p>
      With the original target of NZ$35,000 in mind, AMSAT-ZL looked for a major
      sponsor and found one in the Wellington VHF Group. A unsolicited
      contribution of NZ$10,000 was presented to AMSAT-ZL exclusively to provide
      for the necessary Solar cells.
    </p>
    <div
      style={{
        width: '325px',
        marginBottom: '1.45em',
      }}
    >
      <img
        src={VHFGroup}
        alt="Sample screen output from Telemetry program. Real data from ground testing."
        width="320"
        height="214"
        style={{ marginBottom: `0` }}
      />
      <br />
      <span style={{ fontStyle: `italic` }}>Hands of support - $10,000</span>
    </div>
    <p>
      At the 2007 Easter VHF Convention, Wellington VHF Group Secretary, Dick
      Greenbank, ZL2TGQ, presented a cheque for $10,000 to AMZAT-ZL. In response
      AMSAT-ZL set up a dedicated Solar cell procurement fund.
    </p>
    <p>
      In true spirit of cooperation, suitable cells were located and purchased
      at a considerable saving. As the purchase price and attachment costs were
      well short of this amount, AMSAT-ZL was legally bound to return the unused
      portion of the donation. In a magnanimous gesture The Wellington VHF Group
      in turn made a further generous donation to KiwiSAT.
    </p>
  </Layout>
);

export default IndexPage;
