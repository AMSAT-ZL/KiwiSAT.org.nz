import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Links" keywords={[`KiwiSAT`, `New Zealand`]} />
    <div class="image">
      <p>
        {' '}
        <a href="http://www.amsat-zl.org.nz/">
          <img
            src="images/KiwiSAT-logo2.gif"
            alt="KiwiSAT media"
            width="58"
            height="70"
          />
        </a>
        AMSAT-ZL
      </p>
      <p>New Zealand </p>
    </div>
    <div class="image">
      <p>
        <a href="http://www.nzart.org.nz/nzart/">
          <img
            src="images/nzart.gif"
            alt="KiwiSAT media"
            width="36"
            height="71"
          />
        </a>
        NZART Inc
      </p>
    </div>
    <div class="image">
      <p>
        <a href="http://www.amsatindia.org/index.htm">
          <img
            src="images/amsat_india.gif"
            alt="KiwiSAT media"
            width="206"
            height="50"
          />
        </a>
        AMSAT-India
      </p>
    </div>
    <div class="image">
      <p>
        <a href="http://www.go-mars.org/">
          <img
            src="images/go_mars.jpg"
            alt="KiwiSAT media"
            width="126"
            height="102"
          />
        </a>
        AMSAT-DL - Go Mars project
      </p>
    </div>
    <div class="image">
      <p>
        <a href="http://www.p3e-satellite.org/index.pl">
          <img
            src="images/P3-E.jpg"
            alt="KiwiSAT media"
            width="150"
            height="100"
          />
        </a>
        International project P3-E
      </p>
    </div>
    <div class="image">
      <p>
        <a href="http://www.iaru.org">
          <img
            src="images/iaru.gif"
            alt="KiwiSAT media"
            width="61"
            height="120"
          />
        </a>
        IARU
      </p>
    </div>
    <div class="image">
      <p>
        <a href="http://www.amsat-dl.org/english.html">
          <img
            src="images/adl-anim.gif"
            alt="KiwiSAT media"
            width="87"
            height="100"
          />
        </a>
        AMSAT-DL{' '}
      </p>
      <p>Germany</p>
    </div>
    <div class="image">
      <p>
        <a href="http://www.uk.amsat.org/">
          <img
            src="images/BLUELOGO.gif"
            alt="KiwiSAT media"
            width="93"
            height="100"
          />
        </a>
        AMSAT-UK{' '}
      </p>
      <p>United Kingdom</p>
    </div>
    <div class="image">
      <p>
        <a href="http://www.amsat.org/">
          <img
            src="images/logo150sky.gif"
            alt="KiwiSAT media"
            width="91"
            height="96"
          />
        </a>
        AMSAT-NA USA
      </p>
    </div>
    <div class="image">
      <p>
        <a href="http://www.jamsat.or.jp/index_e.html">
          <img
            src="images/jam2.gif"
            alt="KiwiSAT media"
            width="200"
            height="40"
          />
        </a>
        Japan AMSAT Association - JARL{' '}
      </p>
    </div>
    <div class="image">
      <p>
        <a href="http://www.amsat-vk.org/">
          <img
            src="images/amsatvk.gif"
            alt="KiwiSAT media"
            width="200"
            height="85"
          />
        </a>
        AMSAT-VK Australia
      </p>
    </div>
    <p>&nbsp;</p>
  </Layout>
);

export default IndexPage;
