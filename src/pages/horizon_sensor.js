import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Horizon Sensor" keywords={[`KiwiSAT`, `New Zealand`]} />
    <h2>
      Horizon Sensor. <a class="tiny">(2/Aug/07)</a>{' '}
    </h2>
    <p>
      The Horizon Sensor is a dual unit with sensors for visible light and near
      infrared. It will be mounted on an X or Y face on the ‘attic’ that has
      been added to the satellite structure.{' '}
    </p>
    <div class="image">
      <p>
        <a
          href="images/Technical/horizon_1.jpg"
          rel="lightbox[Gallery]"
          title="Beam Orietation"
        >
          <img
            src="images/Technical/horizon_1_s.jpg"
            width="150"
            height="144"
          />
        </a>
        Fig.1 Beam orientation.
      </p>
    </div>
    <p>
      The sensor comprises two pairs of photodiodes set at an included angle of
      22° such that each pair of light sensitive ‘beams’ converge and cross at a
      point a few cm from the face of the ‘attic’. Each beam has a 10° field of
      view. ( Fig 1) The ‘scan width’ of the combined beam at orbital altitude
      is 490kms. By virtue of this configuration, the only light source in the
      Universe big enough to illuminate both photocells at the same time is
      Sunlight reflected from the Earth’s surface.
    </p>
    <p>
      The associated electronics will output a ‘high’ (+5V) as each cell (of the
      pair) is illuminated. The ‘highs’ will indicate earth pointing and the
      timing of the second high of the pair will occur as the second (trailing)
      cell crosses the horizon or the terminator (day/night line) depending on
      the attitude and movement of the satellite. As with the sun sensor
      readings, the instant triggering of each cell will be accurately timed and
      used as a component of the horizon / terminator detector for use with the
      positional algorithms.
    </p>
    <p>
      The temporary (occasional) illumination of cells by any other celestial
      object will be detected, evaluated and rejected by the software. (The Moon
      and Sun will certainly trigger the photodiodes individually and that may
      be of interest for further experimentation but is not being considered for
      any ADAC ‘added value’ at this time.)
    </p>
    <p>
      In general the angular level of accuracy of the horizon sensor is low
      providing a “ball park” indication of the position of the Earth. The level
      of service this ‘budget’ device will provide to the overall ADAC is more
      confirmatory value than of accurate reference. It will be interesting,
      however, to see just how accurate it can be made with some imaginative
      software. The Camera will tell! (See Camera)
    </p>
    <p>
      Considerable work will be needed to interpret data from this sensing
      device as its illumination will depend on a number of factors:
    </p>
    <h3> 1. The rotational speed and direction of the satellite </h3>
    <h3> 2. The orientation of the satellite whilst it is rotating. </h3>
    <p>
      For instance, if it’s rotating with its X-Y axis parallel (or nearly
      parallel) to the geomagnetic field (almost North/South) the photodiode
      ‘beams’ will be sweeping the horizon “sideways” and both diodes will
      illuminate together! This will not be a sought after orientation but it
      could happen when trying to achieve the objective of pointing the -Z face
      (the face of which is lies X-Y) at the Sun.
    </p>
    <p>
      This is not a particular problem: the other sensors will supply the
      necessary outputs to provide computational data in this event. At worst,
      instantaneous or near instantaneous outputs from the horizon sensor
      outputs – ‘leading diode’ and ‘trailing diode’ - will provide some useable
      ‘orientation confirmation’ adding to the ADAC picture when input into the
      ADAC calculations.
    </p>
    <h3>
      3. The unknown effect that the gradual light reduction will have on
      switching as the sensor sweeps the terminator.
    </h3>
    <div class="image">
      <p>
        <a
          href="images/Technical/horizon_2.jpg"
          rel="lightbox[Gallery]"
          title="Beam reaction on crossing the Terminator."
        >
          <img src="images/Technical/horizon_2_s.jpg" width="150" height="93" />
        </a>
        Fig.2 Crossing the Terminator.
      </p>
    </div>
    <p>
      The sensing of light/dark when crossing the illuminated horizon
      (atmospheric cusp) is expected to be close to instantaneous due to the
      stark difference between the brightness of the Earth’s ‘edge’ and deep
      space. When crossing the terminator, however, the light level will
      gradually fade/increase and will at some point reduce to a level that will
      trip (off or on) the photo diodes.
    </p>
  </Layout>
);

export default IndexPage;
