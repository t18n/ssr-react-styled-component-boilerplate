import Home from 'containers/Home';
import Login from 'containers/Login';
import NotFound404 from 'containers/404';
import Posts from 'containers/Posts';

import loadData from 'helpers/loadData';

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/login', component: Login },
  { path: '/posts', component: Posts, loadData: () => loadData('posts') },
  { component: NotFound404 },
];

export default routes;
