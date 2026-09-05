import React, { useState } from "react";
import "./CSS/PasswordSlider.css";

export default function PasswordSlider({ longitud, setlongitud }) {
  const handleSliderChange = (event) => {
    setlongitud(Number(event.target.value));
  };

  return (
    <div className="slider-container">
      <label htmlFor="password-longitud" className="slider-label">
        Longitud de la contraseña: <strong>{longitud}</strong> caracteres
      </label>
      <input
        type="range"
        id="password-longitud"
        min="0"
        max="20"
        value={longitud}
        onChange={handleSliderChange}
        className="custom-slider"
      />
    </div>
  );
}
