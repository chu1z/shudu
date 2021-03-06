import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import Game from './container/Game'

import reducer from './reducer';

import "./index.css";

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><Game /></Provider>, document.getElementById('root'));