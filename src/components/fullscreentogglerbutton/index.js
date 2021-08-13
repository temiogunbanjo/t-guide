import React from 'react';

const fullScreenAfter30seconds = () => {
  const TIMEOUT = 30;
  setTimeout(function () {
    document.querySelector("body").classList.toggle("fullscreen", true);
  }, TIMEOUT * 1000);
};

// Handler for toggling fullscreen off
const fullscreenToggler = (ev) => {
  document.querySelector("body").classList.toggle("fullscreen", false);
  fullScreenAfter30seconds();
};

function ToggleFSButton(props){
  return (
    <button
      title="Toggle fullscreen off"
      className="rows center fullscreen-toggle-button"
      onClick={fullscreenToggler}
    >
      <i className="icofont-close"></i>
    </button>
  )
}

export default ToggleFSButton;