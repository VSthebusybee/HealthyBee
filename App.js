import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { Button,Text,Snackbar , Divider , Surface, Card, Avatar} from 'react-native-paper';
import Login from './src/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainUI from './src/Main';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import FeedScreen from './src/FeedScreen';
import ProfileScreen from './src/Profile';
import SignUp from './src/SignUp';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();



function HomeScreen(){
  return(
    <Tab.Navigator screenOptions={{ headerShown: false }}  activeColor="#000" >
    <Tab.Screen name="Feed" component={FeedScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
    <Tab.Screen name="My Progress" component={MyProgress} options={{
          tabBarLabel: 'Progress',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="update" color={color} size={26} />
          ),
        }}/>
    <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
  </Tab.Navigator>
  );
}

function MyProgress({navigation}) {
  return(
    <View>
    <Button onPress={() => navigation.navigate('Feed')}>Go Back to Home</Button>
  </View>
  ); 
}

function SettingsScreen() {
  return <View />;
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{title:'Homes'}}/>
      <Stack.Screen name="Main" component={MainUI} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    color: '#ffffff',
    
  },
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
