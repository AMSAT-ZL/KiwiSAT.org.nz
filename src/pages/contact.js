import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2>KiwiSAT Team Contacts: </h2>
    <p>&nbsp;</p>
    <p>
      <a href="mailto:engineering@kiwisat.org.nz">Project Engineer</a>, KiwiSAT{' '}
      <br />
      116 Wade River Road <br />
      Arkles Bay
      <br />
      Whangaparaoa 0932
      <br />
      New Zealand
    </p>
    <p>&nbsp;</p>
    <p>
      <a href="mailto:launch@kiwisat.org.nz">Launch Team</a>, KiwiSAT{' '}
    </p>
    <p>&nbsp;</p>
    <p>
      <a href="mailto:webmaster@kiwisat.org.nz">Webmaster</a>, KiwiSAT{' '}
    </p>
    <p>&nbsp;</p>
    <p>
      <a href="mailto:secretary@kiwisat.org.nz">Secretary</a>, AMSAT-ZL
      <br />
      894 Ponga Road
      <br />
      RD 4<br />
      Auckland 2584
      <br />
      New Zealand
    </p>
    <p>&nbsp;</p>
    <p>
      <a href="mailto:president@kiwisat.org.nz">President</a>
      , AMSAT-ZL <br />
      33 Ryeland Avenue
      <br />
      Christchurch 8041
      <br />
      New Zealand{' '}
    </p>
    <p>&nbsp;</p>
    <p>
      <a href="mailto:amsat-zl@kiwisat.org.nz">AMSAT-ZL</a>
    </p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
  </Layout>
);

export default IndexPage;
