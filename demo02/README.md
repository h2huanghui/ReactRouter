## 路由嵌套

## 一级导航
```
    <div className='mainDiv'>
        <div className='leftNav'>
            <h3>一级导航</h3>
                <ul>
                    <li><Link to='/'>博客首页</Link></li>
                    <li><Link to='/video/'>视频教程</Link></li>
                    <li><Link to='/career/'>职场技能</Link></li>
                </ul>
        </div>
        <div className='rightMain'>
            <Route path='/' exact component={Index} />
            <Route path='/video/' component={Video} />
        </div>
    </div>
```

## 二级导航/video/,三级/video/flutter/
```
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
```

## 二级导航/career
