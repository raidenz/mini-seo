import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }
  changeData = () => {
    this.setState({
      data: 'data'
    })
  }
  componentDidMount() {
    this.changeData()
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>About</title>
          <meta name="description" content="About" />
        </Helmet>
        About {this.state.data}
        <button onClick={this.changeData}>but</button>
      </div>
    )
  }
}
