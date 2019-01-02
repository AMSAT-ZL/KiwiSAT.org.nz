import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Status" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2>
      Current Status <span class="tiny">(2/7/2017)</span>
    </h2>
    <h3>
      <img src="images/MkII_web_s.jpg" alt="KiwiSAT" width="156" height="142" />
    </h3>
    <h3>KiwiSAT. All systems are now fight ready. </h3>
    <h3>Outstanding:</h3>
    <p>
      {' '}
      <strong>Final integration</strong> - All hardware is complete and KiwiSAT
      is operational. Final integration to launch ready awaits addition of the
      flight batteries and fragile solar cells.
    </p>
    <p>
      <strong>Launch negotiation</strong> - AMSAT-ZL are in discussion with
      several agencies. Funding is an important aspect as costs increase and
      resources are stretched.{' '}
    </p>
    <p>
      <strong>Flight Software</strong> - Software is developing on three fronts;
    </p>
    <ol>
      <li>
        <p>
          <u>Boot loader/Operating System</u>   <br />
          Clayton (ZL3TKA), well aided by a VNC connection between his QTH (in
          Canberra) and the clean area then in Massey University in Albany on
          the Auckland North Shore (<em>See image</em>), developed and wrote the
          boot loader. A period of <br />
          intensive reliability testing has proved the reliability of this
          import link in KiwiSAT control.
          <br />
        </p>
      </li>
      <li>
        <div class="image">
          <p>
            <a
              href="images/clean_room-2011.jpg"
              rel="lightbox[Gallery]"
              title="KiwiSAT in final assemble format under test in the AMSAT-ZL Clean Room at Massey Univesity in Albany."
            >
              <img
                src="images/clean_room-2011_s.jpg"
                alt="Clean room"
                width="140"
                height="93"
              />
            </a>{' '}
            AMSAT-ZL Clean Room{' '}
          </p>
        </div>
        <p>
          Two ROM development chips contain the code in flash form in sockets on
          the IHU Main Board. This will then be burnt onto non volatile memory
          IC’s and permanently mounted for flight operation. Pre-flight testing
          and calibration continue.
          <br />
        </p>
      </li>
      <li>
        <p>
          <u>ADAC Application Software</u>
          <br />
          Whilst not absolutely essential pre-launch, it is considered highly
          desirable to complete the (non-ADAC) operational software whilst the
          satellite is in the clean area and a small team have expressed an
          interest in a coordinated approach to this activity.   Clayton will
          take the lead and when at least a basic (but totally reliable!)
          command system is proven, the launch sponsorship campaign will be
          ramped up to full gear.
          <br />
          AMSAT-ZL volunteer Dr Jon Henderson provided an active supervisory
          role on Massey University Masters student Kirill Makarov for this
          activity and progress is now excellent in this area. The NZART
          Radioscience Education Trust sponsored Kirill who breathed some
          greatly appreciated extra enthusiasm into the project. (See ADAC
          Status section for details)
        </p>
      </li>
      <li>
        <p>
          <u>Ground Station Telemetry Decode Program</u>
          <br />
          Terry (ZL2BAC) took on the development of the ground-station telemetry
          decode software and great progress has been made. The Telemetry update
          posted on this site provides the basic information and Terry is happy
          to communicate directly with those having particular interest in this
          aspect. See <a href="telemetry.html">Telemetry page</a> for more
          details.
        </p>
      </li>
    </ol>
    <p>
      <strong>Regulatory requirements</strong> - KiwiSAT is registered with the
      ITU in preparation for launch.
    </p>
    <h2>The Structure. - </h2>
    <p>From the bottom of KiwiSAT and working up.</p>
    <h2>Tray No 1. </h2>
    <div class="image">
      <p>
        <a
          href="images/Dec_09/Tray_3.jpg"
          rel="lightbox[Gallery]"
          title="Transmitters installed in bottom tray."
        >
          <img
            src="images/Dec_09/Tray_3_s.jpg"
            alt="Transmitters installed in bottom tray"
            width="140"
            height="150"
          />
        </a>{' '}
        Transmitter Tray{' '}
      </p>
    </div>
    <p>
      The Transmitter tray is completed to Flight Ready status. Now integrated
      into final assembly. System meets all expectations.
    </p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <h3>Tray No 2.</h3>
    <div class="image">
      <p>
        <a
          href="images/Dec_09/BCR_Tray.jpg"
          rel="lightbox[Gallery]"
          title="Battery Charge Regulator – this unit controls all on-board DC power supplying discrete voltages to each module."
        >
          <img
            src="images/Dec_09/BCR_Tray_s.jpg"
            alt="Battery charge regulator"
            width="140"
            height="136"
          />
        </a>{' '}
        Central Power Control{' '}
      </p>
    </div>
    <p>
      The BCR (Battery Charge Regulator) is completed and integrated into final
      assembly system. Currently active in controlling power from Solar cell
      simulators to the fully integrated KiwiSAT unit.
    </p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <h3>Tray No 3. </h3>
    <div class="image">
      <p>
        <a
          href="images/Dec_09/Bat_Tray.jpg"
          rel="lightbox[Gallery]"
          title="Rechargable Battery."
        >
          <img
            src="images/Dec_09/Bat_Tray_s.jpg"
            alt="Battery tray"
            width="140"
            height="136"
          />
        </a>{' '}
        System Battery{' '}
      </p>
    </div>
    <p>
      The battery tray. While this tray is completed and ready for flight. A
      spare set of batteries are being used during the bench testing.
    </p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <h3>Tray No 4.</h3>
    <div class="image">
      <p>
        <a
          href="images/Dec_09/IHU_tray.jpg"
          rel="lightbox[Gallery]"
          title="Central control and command computer."
        >
          <img
            src="images/Dec_09/IHU_tray_s.jpg"
            alt="Onboard Computer"
            width="140"
            height="133"
          />
        </a>{' '}
        IHU{' '}
      </p>
    </div>
    <p>
      <u>The IHU and RAM disk</u>
      <br />
      The IHU <em>(or Integrated Housekeeping Unit)</em> is the essential
      central satellite system control computer.{' '}
    </p>
    <p>
      This unit is completed and integrated into the final assembly unit now
      under software development.
    </p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <h3>Tray No 5 -The receivers. </h3>
    <div class="image">
      <p>
        <a
          href="images/Dec_09/Rx_Tray.jpg"
          rel="lightbox[Gallery]"
          title="Receiver Tray - placed close to receive aerials."
        >
          <img
            src="images/Dec_09/Rx_Tray_s.jpg"
            alt="Receiver Tray"
            width="140"
            height="125"
          />
        </a>{' '}
        Receiver Tray{' '}
      </p>
    </div>
    <p>
      This completed tray holds the 70cm linear transponder receiver and two
      70cm FM receivers, one for the FM transponder, the other a telemetry
      receiver for control and command.{' '}
    </p>
    <p>
      This completed system is integrated into the final assembly unit and
      running &quot;on-air&quot; using external antenna while KiwiSAT sits in
      its clean environment chamber at ponga Road.
    </p>
    <h3>&nbsp;</h3>
    <h3>The Attic. </h3>
    <div class="image">
      <p>
        <a
          href="images/Dec_09/Flatsat_4.jpg"
          rel="lightbox[Gallery]"
          title="Top Tray or Attic containing the sensors, attitude detectors and Receive Antenna arrays etc.."
        >
          <img
            src="images/Dec_09/Flatsat_4_s.jpg"
            alt="Science Attic"
            width="140"
            height="116"
          />
        </a>{' '}
        Science Attic{' '}
      </p>
    </div>
    <p>Completed and integrated into the final assembly unit.</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <h2>Looming Up</h2>
    <div class="image">
      <p>
        <a
          href="images/Flight loom 1.jpg"
          rel="lightbox[Gallery]"
          title="Development tool for the important inter-tray connection loom."
        >
          <img
            src="images/Flight loom 1_s.jpg"
            alt="Inter-tray connection emulator."
            width="140"
            height="96"
          />
        </a>{' '}
        Completed Flight Loom
      </p>
    </div>
    <p>
      Wiring of the frame, part of the final integration, was completed early
      and now forms part of the fully integrated KiwiSAT.
    </p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <h3>Ground Testing</h3>
    <div class="image">
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
        Flight-ready Solar Panels{' '}
      </p>
    </div>
    <p>
      KiwiSAT, in its flight configuration, is in the AMSAT-ZL clean environment
      chamber at Ponga Road. A remote antenna system allows live testing via the
      flight mode.{' '}
    </p>
    <p>
      Auckland is reasonably hilly and with the team spread over a wide area,
      these good antenna are required to guarantee reliable communications.
    </p>
    <p>&nbsp;</p>
    <h2>Solar Panels</h2>
    <div class="image">
      <p>
        <a
          href="images/Solar panels 1.jpg"
          rel="lightbox[Gallery]"
          title="Solar Panel Set ready for final assembly on the face sides of KiwiSAT."
        >
          <img
            src="images/Solar panels 1_s.jpg"
            alt="Solar Panel Set"
            width="140"
            height="118"
          />
        </a>{' '}
        Flight-ready Solar Panels{' '}
      </p>
    </div>
    <p>
      The six flight solar panels are now assembled and tested awaiting final
      integration. Note the featured picture shows two of the four side panels
      plus the top and bottom (+Z/-Z) panels, there being the fewest panels on
      the bottom panel.
    </p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <h2>AMSAT-ZL Clean Room</h2>
    <div class="image">
      <p>
        <a
          href="images/Clean_cabinet.jpg"
          rel="lightbox[Gallery]"
          title="Clean Cabinet designed for KiwiSAT storage, transportation, demonstration and on-going pre-launch testing."
        >
          <img
            src="images/Clean_cabinet_s.jpg"
            alt="KiwiSAT Clean Box."
            width="140"
            height="112"
          />
        </a>{' '}
        KiwiSAT Clean Box!
      </p>
    </div>
    <p>
      With the construction project now complete and with testing well advanced,
      the need for a Clean Room has passed. KiwiSAT is now housed in its own
      Clean Box. This will allow for safe transportation, continued testing and
      easy demonstration to our important launch sponsors.
    </p>
    <p>
      <em>
        AMSAT-ZL appreciate the professional assistance of the Fan and Filter
        suppliers in the development of the Clean Room at Massey University and
        the AMSAT-ZL Clean Box.
      </em>
    </p>
  </Layout>
);

export default IndexPage;
