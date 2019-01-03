import React from 'react';

import Layout from '../components/layout';
import Card from '../components/card';
import SEO from '../components/seo';

import nzart from '../images/nzart.gif';
import amsatIndia from '../images/amsat_india.png';
import goMars from '../images/go_mars.jpg';
import P3E from '../images/P3-E.jpg';
import IARU from '../images/iaru.jpg';
import amsatDL from '../images/amsat_dl.png';
import amsatUK from '../images/amsat_uk.gif';
import amsatNA from '../images/amsat_na.gif';
import jamsat from '../images/jamsat.gif';
import amsatVK from '../images/amsat_vk.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Links" keywords={[`KiwiSAT`, `New Zealand`]} />
    <Card
      href="https://nzart.org.nz/"
      src={nzart}
      alt="NZART"
      width="69"
      height="142"
      text="New Zealand Association of Radio Transmitters (NZART)"
    />
    <Card
      href="http://www.amsatindia.org/"
      src={amsatIndia}
      alt=""
      text="AMSAT India"
      width="160"
      height="79"
    />
    <Card
      href="http://www.go-mars.org/"
      src={goMars}
      alt=""
      text="AMSAT-DL - Go Mars Project"
      width="126"
      height="102"
    />
    <Card
      href=""
      src={P3E}
      alt=""
      text="International Project P3-E"
      width="150"
      height="100"
    />
    <Card
      href="http://www.iaru.org"
      src={IARU}
      alt="KiwiSAT media"
      text="IARU"
      width="61"
      height="117"
    />
    <Card
      href="http://www.amsat-dl.org/english.html"
      src={amsatDL}
      alt=""
      text="AMSAT DL (Germany)"
      width="200"
      height="45"
    />
    <Card
      href="http://www.uk.amsat.org/"
      src={amsatUK}
      alt="KiwiSAT media"
      text="AMSAT-UK (United Kingdom)"
      width="93"
      height="100"
    />
    <Card
      href="http://www.amsat.org/"
      src={amsatNA}
      alt=""
      text="AMSAT NA (North America)"
      width="75"
      height="90"
    />
    <Card
      href="http://www.jamsat.or.jp/index_e.html"
      src={jamsat}
      alt=""
      text="Japan AMSAT Association"
      width="200"
      height="40"
    />
    <Card
      href="http://www.amsat-vk.org/"
      src={amsatVK}
      alt=""
      text="AMSAT VK (Australia)"
      width="150"
      height="153"
    />
  </Layout>
);

export default IndexPage;
