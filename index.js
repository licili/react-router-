// import './src/1.clock'
// import './src/proson'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Context from './src/context';
import Context from './src/context4';
import Meno from './src/highorder/index';
import Message from './src/Message';
import Modal from './src/Modal';
import ErrorBoundary from './src/ErrorBoundary';

// ReactDOM.render(<ErrorBoundary />,document.getElementById('root'))
ReactDOM.render(<Context />,document.getElementById('root'))