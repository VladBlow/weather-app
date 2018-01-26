import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { applyGlobalStyles } from 'common/styles';

applyGlobalStyles();

render(<App />, document.getElementById('root'));
