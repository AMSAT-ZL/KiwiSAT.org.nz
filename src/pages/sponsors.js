import React from 'react';

import Layout from '../components/layout';
import Card from '../components/card';
import SEO from '../components/seo';

import masseyUni from '../images/sponsors/massey_uni.gif';
import novozone from '../images/sponsors/novozone.gif';
import tmd from '../images/sponsors/TMD_s.jpg';
import austinGreen from '../images/sponsors/Catarama_logo.gif';
import camsensor from '../images/sponsors/camsensor_logo.gif';
import huberSuhner from '../images/sponsors/sponsor1.gif';
import DTA from '../images/sponsors/DTA.jpg';
import venco from '../images/sponsors/Venco_logo2.jpg';
import camfilFarr from '../images/sponsors/Camfil_Farr.jpg';
import tyco from '../images/sponsors/tyco.jpg';
import atsb from '../images/sponsors/atsb.jpg';
import fisherPaykel from '../images/sponsors/FP_logo.gif';
import rakon from '../images/sponsors/rakon_sm.gif';
import ksm from '../images/sponsors/HSM_LOGO.jpg';
import DS from '../images/sponsors/DS_Logo_s.gif';
import glueGuru from '../images/sponsors/glue_guru.jpg';
import stanier from '../images/sponsors/Stanier_Logo.jpg';
import johnsonAero from '../images/sponsors/JALogo.gif';

const IndexPage = () => (
  <Layout>
    <SEO title="Sponsors" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2>
      AMSAT-ZL and the KiwiSAT Team are grateful for the willing support of:
    </h2>
    <Card
      href="http://www.massey.ac.nz/"
      text="Support for Space-frame Technology, Space Environmental Testing and Battery Analysis."
      src={masseyUni}
      width="170"
      height="92"
    />
    <Card
      href="http://www.novozone.co.nz/"
      src={novozone}
      alt=""
      text="Electronic circuit design and construction assistance by Novozone Ltd. specialists in ozone applications for air and water purification."
      width="170"
      height="92"
    />

    <Card
      href="http://tmd.co.nz/index.htm"
      src={tmd}
      alt=""
      text="Prototype design development, assembly and testing of KiwiSAT's U/V transponder."
      width="170"
      height="92"
    />

    <Card
      src={austinGreen}
      alt=""
      text="Austin Green (Proprietor) - Leading operating system/bootloader and 
    ADAC software development."
      width="170"
      height="92"
    />

    <Card
      href="http://www.camsensor.com/"
      src={camsensor}
      alt=""
      text="Horizon camera design/construction and assistance with general satellite housekeeping software development."
      width="170"
      height="92"
    />

    <Card
      href="http://www.hubersuhner.com/"
      src={huberSuhner}
      alt=""
      text="RF cables and connectors donated by InTELCOM SERVICES LTD. and Huber &amp; Suhner (Australia) PTY LTD"
      width="170"
      height="92"
    />

    <Card
      src={DTA}
      alt=""
      text="Shake table for structural integrity testing"
      width="170"
      height="92"
    />

    <Card
      href="http://www.vencon.com/"
      src={venco}
      alt=""
      text="Battery analysis equipment and software"
      width="170"
      height="92"
    />

    <Card
      href="http://www.camfilfarr.com/"
      src={camfilFarr}
      alt=""
      text="Spacecraft Ground Support Equipment (Clean-Box) air filtration design assistance."
      width="170"
      height="92"
    />

    <Card
      href="http://www.tycoelectronics.co.nz/"
      src={tyco}
      alt=""
      text="Tyco Electronics is proud to support the Kiwi-Sat project with the supply of space qualified heat-shrink material."
      width="170"
      height="92"
    />

    <Card
      href="http://www.atsb.my"
      src={atsb}
      alt=""
      text="ASTRONAUTIC TECHNOLOGY(M) SDN. BHD. For location and provision of small quantity space quality RF components in support of the U/V transponder"
      width="170"
      height="92"
    />

    <Card
      href="http://www.fphcare.com/"
      src={fisherPaykel}
      alt=""
      text="Fisher &amp; Paykel Healthcare for Facilities and expertise for structure and component vibration testing."
      width="170"
      height="92"
    />

    <Card
      href="http://www.rakon.com/"
      src={rakon}
      alt=""
      text="Rakon Limited is a world leader in the development of high performance frequency control technology based on quartz crystals, which lie at the heart of all electronic products."
      width="170"
      height="92"
    />

    <Card
      href="http://www.hsmicrowave.com/"
      src={ksm}
      alt=""
      text="Assembly tooling and space materials aquisition/assistance"
      width="170"
      height="92"
    />

    <Card
      href="http://www.designsolutions.co.nz/"
      src={DS}
      alt=""
      text="For graphics in support of the ADAC telemetry download and processing software."
      width="170"
      height="92"
    />

    <Card
      href="http://www.glueguru.co.nz/index.php"
      src={glueGuru}
      alt=""
      text="Glue Guru Industrial supporting KiwiSAT with specialised structural compounds/adhesives"
      width="170"
      height="92"
    />

    <Card
      src={stanier}
      alt=""
      text="Specialist in Precision, Production and Model Engineering - manufacturer of KiwiSAT's space-frame."
      width="170"
      height="92"
    />
    <Card
      href="http://johnson.aero/"
      src={johnsonAero}
      alt=""
      text="Johnson Aero - aeronautics and astronautics projects - from sea to shining star."
      width="170"
      height="92"
    />
  </Layout>
);

export default IndexPage;
