import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UsersProvider from "./context/context";
import Users from "./components/Users";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <UsersProvider>
      <NativeBaseProvider>
        <StatusBar hidden />
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: 'white',
              inactiveTintColor: 'lightgray',
              activeBackgroundColor: 'black',
              inactiveBackgroundColor: 'black',
            }}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } if (route.name === 'Users') {
                  iconName = focused ? 'person' : 'person-outline';
                } else if (route.name === 'UserDetails') {
                  iconName = focused ? 'information' : 'information-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'whitesmoke',
              tabBarInactiveTintColor: 'lightgray',
            })}
          >
            <Tab.Screen
              name="Home"
              component={Home}
            />
            <Tab.Screen
              name="Users"
              component={Users}
            />
            <Tab.Screen
              name="UserDetails"
              component={UserDetails}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </UsersProvider>
  );
}