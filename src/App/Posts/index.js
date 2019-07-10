import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'fetch-everywhere';

export default class Posts extends Component {
  constructor() {
    super();
    this.state = {
      postList : []
    }
  }
  componentDidMount() {
    const data = fetch('/api/posts')
    data.then(res => {
      if(res.status === 200) {
        return res.json()
      }
    }).then( resJson => {
      this.setState({
        postList: resJson
      })
   });
  }
  render() {
    
    
    return (
      <div>
        Posts
        <ul>
          {this.state.postList.map(postItem => (
            <li><Link to={`/posts/${postItem.permalink}`}>{postItem.title}</Link></li>
          ))}

        </ul>
      </div>
    )
  }
}
