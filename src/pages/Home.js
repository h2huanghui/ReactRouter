import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { articleId: 1, title: 'hh-blog-1' },
                { articleId: 2, title: 'hh-blog-2' },
                { articleId: 3, title: 'hh-blog-3' }
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>huanghui.com</h2>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/list/${item.articleId}`}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        )
    }
}

export default Home;