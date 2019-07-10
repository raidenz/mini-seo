import React, { Component, Fragment } from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Helmet from 'react-helmet';
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>My Title</title>
          <meta charSet="utf-8" />
          <meta name="description" content={"Mini Seo App"} />
          link rel="manifest" href="/manifest.json" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
          <meta name="googlebot-news" content="index,follow" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Seo App" />
        </Helmet>
        <div className="container">
          <nav>
            <Link to="/">Homepage</Link>
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
          </nav>
          <div className="main-content">
            <Switch>
              {routes.map((route, i) => <Route key={i} {...route} />)}
            </Switch>
          </div>
        </div>
      </Fragment>
    )
  }
}
