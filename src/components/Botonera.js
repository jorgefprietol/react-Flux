import React from 'react';
import './Botonera.css';

import * as ColorappActions from '../actions/ColorappActions';

function Botonera() {

    const buttonclick = (color) => {
        ColorappActions.changeColor(color);
    }

  return (
    <div className="Botonera">
        <button onClick={event => buttonclick('#ff0000')}>Rojo</button>
        <button onClick={event => buttonclick('#00ff00')}>Verde</button>
    </div>
  );
}

export default Botonera;
