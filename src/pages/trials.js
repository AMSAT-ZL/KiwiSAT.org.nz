import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Trials" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2>TRANSPONDER ON TEST!</h2>
    <div>
      <p>
        <a
          href="images/Technical/KiwiSAT_Bench.jpg"
          title="KiwiSAT running on its internal systems in final operational mode. Set up in the AMSAT-ZL Clean Room at Massey University, Auckland."
          target="_blank"
          rel="lightbox[Gallery]"
        >
          <img
            src="images/Technical/KiwiSAT_Bench_s.jpg"
            alt=""
            width="140"
            height="105"
          />
        </a>
        Final pre-launch configuration
      </p>
    </div>
    <p>
      The KiwiSAT is &quot;on air&quot; from the Clean Evironment Chamber at the
      QTH of Ian, ZL1AOX.
    </p>
    <p>
      Meanwhile the solar panels are being upgraded and a new battery pack
      (Flight Pack) to replace the test and trial unit is being engineered.
    </p>
    <p>
      <strong>Transponder:</strong> Inverting type{' '}
      <span>(Orbital Doppler shift compensation)</span>
    </p>
    <ul>
      <li>Transmit Power: 2 Watts PEP.</li>
      <li>Beacon frequency: 145.885 MHz</li>
      <li>
        Uplink: (U-Band) 435.265 to 435.235 MHZ <strong>LSB</strong>{' '}
        <u>
          <strong>or</strong>
        </u>
      </li>
      <li>
        Uplink: (L-Band) 1268.880 to 1268.850 MHz <strong>LSB</strong>
      </li>
      <li>
        Down link: 145.850 to 145.880 MHz <strong>USB</strong>
      </li>
    </ul>
    <strong>Note</strong>: A trial transmission on 435.2544 <strong>LSB</strong>{' '}
    comes out at 145.860 <strong>USB</strong>
    <p>
      <br />
      <div>
        <p>
          <a
            href="images/Technical/Massey 2.JPG"
            rel="lightbox[Gallery]"
            title="Test Antenna mounted external to the Clean Room bulding for early proving trials."
          >
            <img
              src="images/Technical/Massey 2_s.JPG"
              alt="Clean Room Test Antenna"
              width="140"
              height="128"
            />
          </a>{' '}
          Clean Room Test Antenna{' '}
        </p>
      </div>
    </p>
    <p>
      Being a linear transponder 30kHz wide, any mode can be used. FM is
      discouraged (but not banned). Amateur stations are encouraged to try out
      the transponder.
    </p>
    <p>Reports welcome to &lt; zl3ql(at)amsat.org &gt;</p>
  </Layout>
);

export default IndexPage;
