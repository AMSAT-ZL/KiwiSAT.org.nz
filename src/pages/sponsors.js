import React from 'react';

import Layout from '../components/layout';
import Sponsor from '../components/sponsor';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Sponsors" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2>
      AMSAT-ZL and the KiwiSAT Team are grateful for the willing support of:
    </h2>
    <Sponsor
      url="http://www.massey.ac.nz/"
      text="Support for Space-frame Technology, Space Environmental Testing and Battery Analysis."
      src="images/sponsors/massey_uni.gif"
    />
    <div class="sponsor">
      <a
        href="http://www.massey.ac.nz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/sponsors/massey_uni.gif"
          alt="Support for Space-frame Technology, Space Environmental Testing and Battery Analysis."
          title="Support for Space-frame Technology,  Space Environmental Testing and Battery Analysis."
          width="170"
          height="92"
        />
      </a>
    </div>

    <div class="sponsor">
      <a
        href="http://www.novozone.co.nz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/sponsors/novozone.gif"
          alt="Electronic circuit design and construction assistance by Novozone Ltd. specialists in ozone applications for air and water purification."
          title="Electronic circuit design and construction assistance by Novozone Ltd. specialists in ozone applications for air and water purification."
          width="170"
          height="92"
        />
      </a>
    </div>

    <div class="sponsor">
      <a
        href="http://tmd.co.nz/index.htm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/sponsors/TMD_s.jpg"
          alt="Prototype design development, assembly and testing of KiwiSAT's U/V transponder."
          title="Prototype design development, assembly and testing of KiwiSAT's U/V transponder."
          width="170"
          height="92"
        />
      </a>
    </div>

    <div class="sponsor">
      <img
        src="images/sponsors/Catarama_logo.gif"
        alt="Austin Green (Proprietor) - Leading operating system/bootloader and 
    ADAC software development."
        title="Austin Green (Proprietor) - Leading operating system/bootloader and 
    ADAC software development."
        width="170"
        height="92"
      />
    </div>

    <div class="sponsor">
      <a
        href="http://www.camsensor.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/sponsors/camsensor%20logo.gif"
          alt="Horizon camera design/construction and assistance with general satellite housekeeping software development."
          title="Horizon camera design/construction and assistance with general satellite housekeeping software development."
          width="170"
          height="92"
        />
      </a>
    </div>

    <div class="sponsor">
      <a
        href="http://www.hubersuhner.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/sponsors/sponsor1.gif"
          alt="RF cables and connectors donated by InTELCOM SERVICES LTD. and Huber &amp; Suhner (Australia) PTY LTD"
          title="RF cables and connectors donated by InTELCOM SERVICES LTD. and Huber &amp; Suhner (Australia) PTY LTD"
          width="170"
          height="92"
        />
      </a>
    </div>

    <div class="sponsor">
      <img
        src="images/sponsors/DTA.jpg"
        alt="Shake table for structural integrity testing"
        title="Shake table for structural integrity testing"
        width="170"
        height="92"
      />
    </div>

    <div class="sponsor">
      <a
        href="http://www.vencon.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/sponsors/Venco_logo2.jpg"
          alt="Battery analysis equipment and software"
          title="Battery analysis equipment and software"
          width="170"
          height="92"
        />
      </a>
    </div>

    <div class="sponsor">
      <a
        href="http://www.camfilfarr.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/sponsors/Camfil Farr.jpg"
          alt="Spacecraft Ground Support Equipment (Clean-Box) air filtration design assistance"
          title="Spacecraft Ground Support Equipment (Clean-Box) air filtration design assistance."
          width="170"
          height="92"
        />
      </a>
    </div>

    <div class="sponsor">
      <a
        href="http://www.tycoelectronics.co.nz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/sponsors/tyco.jpg"
          alt="Tyco Electronics is proud to support the Kiwi-Sat project with the supply of space qualified heat-shrink material."
          title="Tyco Electronics is proud to support the Kiwi-Sat project with the supply of space qualified heat-shrink material."
          width="170"
          height="92"
        />
      </a>
    </div>

    <div class="sponsor">
      <div align="center">
        <a href="http://www.atsb.my" target="_blank" rel="noopener noreferrer">
          <img
            src="images/sponsors/atsb.jpg"
            alt="ASTRONAUTIC TECHNOLOGY(M) SDN. BHD. For location and provision of small quantity space quality RF components in support of the U/V transponder"
            title="ASTRONAUTIC TECHNOLOGY(M) SDN. BHD. For location and provision of small quantity space quality RF components in support of the U/V transponder"
            width="170"
            height="92"
          />
        </a>
      </div>
    </div>

    <div class="sponsor">
      <a
        href="http://www.fphcare.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/sponsors/FP_logo.GIF"
          alt="Fisher &amp; Paykel Healthcare for Facilities and expertise for structure and component vibration testing."
          title="Fisher &amp; Paykel Healthcare for Facilities and expertise for structure and component vibration testing."
          width="170"
          height="92"
        />
      </a>
    </div>

    <div class="sponsor">
      <a href="http://www.rakon.com/" target="_blank" rel="noopener noreferrer">
        <img
          src="images/sponsors/rakon_sm.gif"
          alt="Rakon Limited is a world leader in the development of high performance frequency control technology based on quartz crystals, which lie at the heart of all electronic products."
          title="Rakon Limited is a world leader in the development of high performance frequency control technology based on quartz crystals, which lie at the heart of all electronic products."
          width="170"
          height="92"
        />
      </a>
    </div>

    <div class="sponsor">
      <a
        href="http://www.hsmicrowave.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/sponsors/HSM_LOGO.jpg"
          alt="Assembly tooling and space materials aquisition/assistance."
          title="Assembly tooling and space materials aquisition/assistance"
          width="170"
          height="92"
        />
      </a>
    </div>

    <div class="sponsor">
      <a
        href="http://www.designsolutions.co.nz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/sponsors/DS_Logo_s.GIF"
          alt="For graphics in support of the ADAC telemetry download and processing software."
          title="For graphics in support of the ADAC telemetry download and processing software."
          width="170"
          height="92"
        />
      </a>
    </div>

    <div class="sponsor">
      <a
        href="http://www.glueguru.co.nz/index.php"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="images/sponsors/glue_guru.jpg"
          alt="Glue Guru Industrial supporting KiwiSAT with specialised structural compounds/adhesives"
          title="Glue Guru Industrial supporting KiwiSAT with specialised structural compounds/adhesives"
          width="170"
          height="92"
        />
      </a>
    </div>

    <div class="sponsor">
      <img
        src="images/sponsors/Stanier Logo.jpg"
        alt="Specialist in Precision, Production and Model Engineering - manufacturer of KiwiSAT's space-frame."
        title="Specialist in Precision, Production and Model Engineering - manufacturer of KiwiSAT's space-frame."
        width="170"
        height="92"
      />
    </div>

    <div class="sponsor">
      <a href="http://johnson.aero/" target="_blank" rel="noopener noreferrer">
        <img
          src="images/sponsors/JALogo.gif"
          alt="Johnson Aero - aeronautics and astronautics projects - from sea to shining star."
          title="Johnson Aero - aeronautics and astronautics projects - from sea to shining star."
          width="170"
          height="92"
        />
      </a>
    </div>
  </Layout>
);

export default IndexPage;
