import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Media" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2 class="first">
      <strong>Media</strong>
    </h2>
    <p>
      <img
        src="images/Ksat_Asian_conf.jpg"
        alt="KiwiSAT Asian Conference"
        width="250"
        height="66"
      />
      Asian Space Conference 2007.
    </p>

    <p>
      With the aid of Massey university, KiwiSAT Team Leader Mr Fred Kennedy
      attended the Asian Space Conference in Singapore 21-23 March in 2007. Fred
      made a keynote presentation to the Conference on the design and
      development of KiwiSAT with an update on progress to date.
    </p>
    <p>
      Fred spoke of the difficulties encountered the project being overcome by
      traditional &quot;Kiwi&quot; ingenuity and the &quot;can-do&quot; approach
      to otherwise insoluble problems.
    </p>
    <h3>
      To quote Fred;{' '}
      <em>
        'The Nation that spawned Dr William Pickering, "whose leadership took
        America's space effort to the moon and beyond", can surely produce a
        microsat by itself!'
      </em>
    </h3>
  </Layout>
);

export default IndexPage;
