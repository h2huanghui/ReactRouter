import React from 'react'
import { Route, Link } from 'react-router-dom'
import Flutter from './video/Flutter'
import ReactPage from './video/ReactPage'
import Vue from './video/Vue'

const Video = () => {
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to='/video/flutter/'>Flutter教程</Link></li>
                    <li><Link to='/video/reactpage/'>React教程</Link></li>
                    <li><Link to='/video/vue/'>Vue教程</Link></li>
                </ul>
            </div>
            <div className='videoContent'>
                <h3>视频教程</h3>
                <Route path='/video/flutter/' component={Flutter}/>
                <Route path='/video/reactpage/' component={ReactPage}/>
                <Route path='/video/vue/' component={Vue}/>
            </div>
        </div>
    )
}

export default Video
