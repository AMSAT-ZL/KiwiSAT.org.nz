import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (
  <div
    style={{
      display: `block`,
      border: `1px black`,
      marginBottom: `1em`,
      boxShadow: `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`,
    }}
  >
    <a href={props.href} rel={props.rel}>
      <div style={{ width: `200px`, float: `left`, marginRight: `1em` }}>
        <img
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          style={{
            display: `block`,
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        />
      </div>
      {props.text}
      <br clear="all" />
    </a>
  </div>
);

Card.defaultProps = {
  alt: '',
  text: '',
  rel: '',
};

Card.propTypes = {
  href: PropTypes.string,
  rel: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
