import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartWorkout from './StartWorkout';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();  
const Tab=createBottomTabNavigator();

function Feed({navigation}){
  return(
    
    <View style={styles.container}>
      <Image source={require('./busybee.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome to Healthify</Text>
      <View style={styles.buttonContainer}>
            
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Start Workout')}>
          <Text style={styles.buttonText}>Start Workout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Nutrition</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Track Progress</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.disclaimerText}>Note: Always consult with a professional before starting any workout or nutrition plan.</Text>
    
    
    </View>
    
    
  );
}

function  ViewNutrition(){
  return(
    <View/>
  );
}

function MainUI({navigation}){
  return (
   /*  */
    <NavigationContainer screenOptions={{ headerShown: false }} independent="true">
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed}/>
      <Stack.Screen name='StartWorkout' component={StartWorkout}/>
      <Stack.Screen name='Start Workout' component={ViewNutrition}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 32,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disclaimerText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
});

export default MainUI;
