import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

// const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <BottomTabs.Navigator
            initialRouteName='User'
            // screenOptions={{
            //    headerStyle: { backgroundColor: '#3c0a6b' },
            //    headerTintColor: 'white',
            //    drawerActiveBackgroundColor: '#f0e1ff',
            //    drawerActiveTintColor: '#3c0a6b'
            // }}
            screenOptions={{
               headerStyle: { backgroundColor: '#3c0a6b' },
               headerTintColor: 'white',
               tabBarActiveTintColor: '#3c0a6b'
            }}>
            <BottomTabs.Screen
               name='Welcome'
               component={WelcomeScreen}
               // options={{
               //    drawerLabel: 'Welcome Screen',
               //    drawerIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
               // }}
               options={{
                  tabBarLabel: 'Welcome Screen',
                  tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
               }}
            />
            <BottomTabs.Screen
               name='User'
               component={UserScreen}
               // options={{
               //    drawerIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />,
               // }}
               options={{
                  tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />,
               }}
            />
         </BottomTabs.Navigator>
      </NavigationContainer>
   );
}
