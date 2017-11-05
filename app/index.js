import { StackNavigator } from 'react-navigation';
import DrawerStack from './components/drawerStack/drawerStack.js';
import Pdp from './components/pdp/pdp';
import Plp from './components/plp/plp';
import Home from './components/home/home';
import Cart from './components/cart/cart';

const Navigator = StackNavigator({
	drawerStack: {screen: DrawerStack},
    Pdp: {screen: Pdp},
    Plp: {screen: Plp},
    Home: {screen: Home},
    Cart: {screen: Cart}
}, {
	headerMode: 'screen',
	initialRouteName: 'drawerStack'
})

export default Navigator;