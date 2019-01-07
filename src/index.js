import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
// import Router from './routers';
import 'antd/dist/antd.css'

import Index from './routers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
serviceWorker.unregister();
