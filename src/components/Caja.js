import React, { Component } from 'react';
import './Caja.css';

import ColorappStore from '../stores/ColorappStore';

class Caja extends Component {
    constructor(props){
        super(props);

        this.state = {
            color: ColorappStore.getActiveColor(),
        }
    }

    componentDidMount(){
        ColorappStore.on('storeUpdated', this.updateColor)
    }

    componentWillUnmount() {
        ColorappStore.removeListener('storeUpdated', this.updateColor);
    }

    updateColor = () => {
        this.setState({
            color: ColorappStore.getActiveColor(),
        })
    }

  render() {
      return (
          <div className="Caja">
              <div className='color-container' style={{backgroundColor: this.state.color}}></div>
          </div>
      )
  }
}

export default Caja;
