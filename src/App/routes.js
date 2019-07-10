import Homepage from './Homepage';
import Posts from './Posts';
import PostSingle from './PostSingle';
import About from './About';

const routes = [
  {
    path: "/",
    exact: true,
    component: Homepage
  },
  {
    path: "/posts",
    exact: true,
    component: Posts
  },
  {
    path: "/posts:title",
    exact: true,
    component: PostSingle
  },
  {
    path: "/about",
    exact: true,
    component: About
  },
];

export default routes;