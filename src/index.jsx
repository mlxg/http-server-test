import React from 'react'
import ReactDOM from 'react-dom'
import HelloComponent from '../components/hello.jsx'
import './index.less'
import axios from 'axios'

/*axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';*/


ReactDOM.render(
    <div className='app-box'>
        <HelloComponent/>
    </div>,
    document.getElementById('app')
)