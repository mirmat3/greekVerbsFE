import React from "react";
import PropTypes from "prop-types";

import "./Titulo.css";
import { GiGreekTemple } from "react-icons/gi";

function Titulo(props) {
  const { texto, subTexto } = props;
  return (
    <div className="classTitle">
      <h1>
        <span className="iconTitle"><GiGreekTemple size={46}/></span>
        {texto} / <span className="greek">{subTexto}</span>
        <span className="iconTitle"><GiGreekTemple size={46}/></span>
      </h1>
    </div>
  );
}

Titulo.propTypes = {
  texto: PropTypes.string,
  subTexto: PropTypes.string,
};
export default Titulo;
