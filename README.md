## 1. 安装react-router
`npm i --save react-router-dom`
## 2. 路由精确匹配 exact
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

## 3. 页面分离

## 4. 动态传值,实现首页文章列表跳转,点击列表,跳转传入id值到详情页

## 5. 重定向
1. Redirect标签<br>
```
import { Link, Redirect } from 'react-router-dom'
<Redirect to='/index/' />
```
2. 编程式重定向
``` 
this.props.history.push('/index/')
```