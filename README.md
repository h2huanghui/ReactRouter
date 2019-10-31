## 安装react-router
`npm i --save react-router-dom`
## 路由精确匹配 exact
```
   <Router>
        <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/list/'>列表</Link></li>
        </ul>
        <Route path='/' exact component={Index}/>
        <Route path='/list/' component={List}/>
    </Router>
```