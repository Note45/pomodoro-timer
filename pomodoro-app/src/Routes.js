import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './pages/main';

const Pages = createStackNavigator({
  main: {
    screen: Main,
    navigationOptions: {
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#F85959',
        elevation: 0
      }
    }  
  },
})

const Routes = createAppContainer(Pages)

export default Routes;