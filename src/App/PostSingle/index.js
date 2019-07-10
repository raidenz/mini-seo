import React, { Component } from 'react'
import Helmet from 'react-helmet';
import axios from 'axios';

export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      postContent : {}
    }
  }
  getPost = async () => {
    const isBrowser = window!==undefined
    if (isBrowser) {
      await axios.get(`http://localhost:3004/posts/${this.props.match.params.title}`)
      .then(res => {
        if(res.status === 200) {
          this.setState({
            postContent: res.data[0]
          })
          console.log(res)
        }
      })
    }
  }
  componentDidMount() {
    this.getPost();
  }
  render() {
    const {postContent} = this.state;
    return (
      <div>
        {
          postContent && postContent.title && (
            <Helmet>
              <title>{postContent.title}</title>
              <meta name="description" content={postContent.meta.description} />
            </Helmet>
          )
        }
        {
          postContent && postContent.title && (
            <div>
              <h3>{postContent.title}</h3>
              <div className="main-content">
                {postContent.body}
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
