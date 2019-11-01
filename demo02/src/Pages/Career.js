import React from 'react'
import { Route, Link } from 'react-router-dom'
import Salary from './career/Salary'
import Sleep from './career/Sleep'

function Career() {
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to='/career/salary/'>程序员涨薪</Link></li>
                    <li><Link to='/career/sleep/'>程序员早睡</Link></li>
                </ul>
            </div>
            <div className='careerContent'>
                <h3>程序员生涯</h3>
                <Route path='/career/salary/' component={Salary}/>
                <Route path='/career/sleep/' component={Sleep}/>
            </div>
        </div>
        
    )
}

export default Career