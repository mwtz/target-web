import routesPaths from './routesPaths';
import Home from 'pages/Home';
import Signup from 'pages/Signup';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import CreateTarget from 'pages/createTarget';
import EditTarget from 'pages/editTarget';
import About from 'pages/about';

const routes = [
  {
    path: routesPaths.index,
    component: <Home />,
    exact: true,
    private: true,
  },
  {
    path: routesPaths.signup,
    component: <Signup />,
  },
  {
    path: routesPaths.login,
    component: <Login />,
  },
  {
    path: routesPaths.profile,
    component: <Profile />,
  },
  {
    path: routesPaths.newtarget,
    component: <CreateTarget />,
  },
  {
    path: routesPaths.editTarget,
    component: <EditTarget />,
  },
  {
    path: routesPaths.about,
    component: <About />,
  },
];

export default routes;
