import * as React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Login = ({navigation}) => {
  const [text, setText] = React.useState("");
    const handleLoginPress = () => {
        navigation.navigate('Home');
      };
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('./busybee.png')} style={styles.logoImage} />
        <Text style={styles.logoText}></Text>
      </View>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <TextInput label={'Email or Username'}
          style={styles.input}
          mode="outlined"
          value={text}
          placeholder="username@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setText(text)}
        />
        <TextInput label={'Password'}
          style={styles.input}
          mode="outlined"
          placeholder='Password'
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
         <Button style={styles.loginButton} onPress={handleLoginPress} icon="login" mode='contained'>
          Login
         </Button>
          
      </View>

      {/* Social Links */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Twitter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  formContainer: {
    width: '80%',
    marginBottom: 50,
  },
  input: {
  
    height: 40,
    paddingLeft: 10,
    marginBottom: 10,
  },
    loginButton: {
    
    
    
  },
  loginButtonText: {
    
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
  },
  socialButton: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default Login;
