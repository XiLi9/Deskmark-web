
import Perf from 'react-addons-perf';
// 用于分析性能，最终代码会去除. 在浏览器的命令行测试
// Perf.start(), Perf.stop(), 
// printInclusive()或者printExclusive(), printWasted(), printOperations()
// 上述四种方法接收参数measurements = Perf.getLastMeasurements();
window.Perf = Perf;

import React from 'react';
import {render} from 'react-dom';
import {bindActionCreators, createStore, applyMiddleware} from 'redux';
import {connect, Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import Deskmark from './components/Deskmark';
import rootReducer from './reducers/index.js';
import * as actionCreators from './actions';

import 'bootstrap/scss/bootstrap.scss';

// var PureRenderMixin = require('react-addons-perf-render-mixin');


// 使用中间件创建store
const store = applyMiddleware(
	thunkMiddleware
)(createStore)(rootReducer);

// 容器
const container = document.body.appendChild(
	document.createElement('div')
);

// 基于Deskmark的跟组件
const App = connect(
	state =>({state}),
	dispatch => ({
		actions: bindActionCreators(actionCreators, dispatch)
	})
)(Deskmark);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);

				

