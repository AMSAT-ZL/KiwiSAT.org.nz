import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 - NOT FOUND</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Link to="/">
        <Image />
      </Link>
    </div>
    <p>No satellite found with those orbital parameters.</p>
  </Layout>
);

export default NotFoundPage;
