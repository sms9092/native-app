import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { Products } from './screens/Products';
import { Orders } from './screens/Orders';
import { Notifications } from './screens/Notifications';  
  
 
const Tab = createMaterialBottomTabNavigator();

 function BottomNavigation() {
    return (
      <Tab.Navigator
        initialRouteName="Products"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Products"
          component={Products}
          options={{
            tabBarLabel: 'Products',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  export { BottomNavigation }