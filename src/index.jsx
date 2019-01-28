import React from 'react'
import ReactDOM from 'react-dom'
import HelloComponent from '../components/hello.jsx'
import './index.less'
import 'antd/dist/antd.css'

ReactDOM.render(
    <div className='app-box'>
        <HelloComponent/>
    </div>,
    document.getElementById('app')
)
