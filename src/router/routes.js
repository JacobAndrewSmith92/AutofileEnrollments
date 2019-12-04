// import App from '../../src/App';
import SetupTask from '../components/SetupTask';
import HelloWorld from '../components/HelloWorld';
import BusinessProfile from '../components/BusinessProfile';



const routes = [
  { path: '/setup-tasks', component: SetupTask},
  { path: '/hello-world', component: HelloWorld},
  { path: '/complete-business-profile', component: BusinessProfile}

];

export default routes;