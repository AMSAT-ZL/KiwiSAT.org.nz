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
    <a href={props.href}>
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        style={{ float: 'left' }}
      />
      {props.text}
      <br clear="all" />
    </a>
  </div>
);

Card.defaultProps = {
  alt: '',
  text: '',
};

Card.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
