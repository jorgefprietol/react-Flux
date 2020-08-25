import dispatcher from '../Dispatcher';
import * as ColorappActions from '../actions/ColorappActions';
import {EventEmitter} from 'events';

class ColorappStore extends EventEmitter {
    constructor() {
        super();

        this.activeColor = '#ffff00';
    }

    handleActions(action){
        switch (action.type) {
            case ColorappActions.COLOR_APP_ACTIONS.CHANGE_COLOR: {
                this.activeColor = action.value;
                this.emit('storeUpdated');
                break;
            }
            default: {
            
            }
        }

    }

    getActiveColor() {
        return this.activeColor;
    }

}

const colorAppStore = new ColorappStore();
dispatcher.register(colorAppStore.handleActions.bind(colorAppStore));

export default colorAppStore;