import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Sun Sensor" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2> Sun Sensor </h2>
    <p>
      It is intended to install two Sun Sensors with the Main Sun Sensor on an X
      or Y axis face of the ‘attic’ and a second, a Target Sun Sensor, on the Z-
      face of the satellite which forms the bottom (launch mounting) face.{' '}
    </p>
    <p>
      The two Sun Sensors are based on Hamamatsu Two Dimensional Position
      Sensitive Detector (PSD) Photo-diodes Type S 5991-01.
    </p>
    <div>
      <p>
        <a
          href="images/Technical/sun_sensor_kit.jpg"
          rel="lightbox[Gallery]"
          title="Components of the Flight Sun Sensor Unit."
        >
          <img
            src="images/Technical/sun_sensor_kit_s.jpg"
            alt="Sun sensor"
            width="120"
            height="71"
          />
        </a>
        Flight components
      </p>
    </div>
    <p>
      Each sensor has a pinhole aperture positioned centrally above a 9mm square
      photosensitive surface which outputs voltages proportional to the X/Y
      co-ordinates of a light spot which impinges on its surface. By suitably
      sizing the gap between the pinhole and the photosensitive surface, the
      range of angular readings can be set to suit the usage requirement. It is
      currently proposed that both sensors for KiwiSAT will be set to plus/minus
      45 degrees ‘around the clock’.
    </p>
    <p>
      The analogue outputs from the sensors are digitized using computational
      and A/D chips. These will be read and stored - along with a time mark
      provided by the system clock. In addition to its angular reading, a 3
      state output validation signal will also be transferred via the telemetry
      stream to indicate the following states; “Sensor OFF”, “Detector Current
      out of Range” and “Signal Valid”. The sun sensors will be ground
      switch-able via either uplink.
    </p>
    <div>
      <p>
        <a
          href="images/Technical/sun_s_test_rig.JPG"
          rel="lightbox[Gallery]"
          title="Sun Sensor bench test Rig."
        >
          <img
            src="images/Technical/sun_s_test_rig_s.JPG"
            alt="Sun sensor test rig"
            width="120"
            height="90"
          />
        </a>
        Prototype - Test Rig
      </p>
    </div>
    <p>
      A trial head was built and this, in conjunction with a spare electronic
      system PCB - donated by AMSAT-NA (our thanks to them) - was used for
      system testing/proving. The trials, using the ex AO-40 board were
      completed satisfactorily and changes that were appropriate to the use of
      the above mentioned improved tetra-lateral PSD were made prior to the
      production of a custom prototype PCB. This was populated and fully proven
      using the prototype detector head.
    </p>
    <div>
      <p>
        <a
          href="images/Technical/sun_sensor.jpg"
          rel="lightbox[Gallery]"
          title="Fully assembled Fight-ready Sun Sensor."
        >
          <img
            src="images/Technical/sun_sensor_s.jpg"
            alt="Flight ready sun sensor"
            width="113"
            height="89"
          />
        </a>
        Flight unit
      </p>
    </div>
    <p>
      During the trial it became clear that the head could be considerably
      reduced in size and a Mk2 – with a 50% saving in weight - was drawn up and
      two pieces were produced. The system has been tested over a period of two
      years and has been provisionally accepted. New PCB’s are being produced
      using SMT components. These will be assembled to flight standard and fully
      tested in the thermal vacuum test facility prior to final acceptance for
      flight.
    </p>
    <h3>August 2007</h3>
    <p>
      We are please to report that development is now complete with flight unit
      ready for final integration.
    </p>
    <h3>
      June 2010 - All complete and installed awaiting final satellite
      integration.
    </h3>
  </Layout>
);

export default IndexPage;
