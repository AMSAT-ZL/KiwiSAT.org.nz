import React from 'react';
import PropTypes from 'prop-types';

const Sponsor = props => (
  <div class="compsponsor">
    <a href="{props.url}">{props.text}</a>
  </div>
);

Sponsor.defaultProps = {
  text: '',
};

Sponsor.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

export default Sponsor;
