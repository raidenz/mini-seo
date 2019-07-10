import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class P404 extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>404</title>
          <meta name="description" content="404" />
        </Helmet>
        404 - Not Found
      </div>
    )
  }
}
