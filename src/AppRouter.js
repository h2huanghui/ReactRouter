import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'

const AppRouter = () => {
    return (
        <Router>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/list/123'>列表</Link></li>
            </ul>
            <Route path='/' exact component={Home}/>
            <Route path='/list/:id' component={List}/>
        </Router>
    )
}
 
export default AppRouter;