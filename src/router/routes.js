import App from '../../src/App';
import SetupTask from '../components/SetupTask';
import HelloWorld from '../components/HelloWorld';



const routes = [
  { path: '/', component: App},
  { path: '/setup-tasks', component: SetupTask},
  { path: '/hello-world', component: HelloWorld},


];

export default routes;