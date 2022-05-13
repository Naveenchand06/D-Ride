import React from "react";
import PropTypes from "prop-types";

function Card({ name }) {
  console.log(name);
  return <div className="card">{name}</div>;
}

// Card.defaultProps = {
//   toyou: "Todo varala",
// };

// Card.PropTypes = {
//   toyou: propTypes.string,
// };

export default Card;
