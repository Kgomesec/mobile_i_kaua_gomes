<<<<<<< HEAD
import { StyleSheet, Text, View, Image } from 'react-native';
=======
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios'; // para fazer requests
import React, { useEffect } from 'react';
>>>>>>> bd427917794961ff5cd9a1088dfb43adee4c4086

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/loginHome.webp')} style={styles.image} />
      <View style={[styles.textContainer, styles.centerContent]}>
        <Text style={styles.getStarted}>Get started</Text>
        <Text style={styles.description}>Sign up or login</Text>
      </View>
      <View style={[styles.buttonsContainer, styles.centerContent]}>
        <View>
          <Text>Sign up</Text>
        </View>
        <View>
          <Text>Login</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  centerContent: {
    alignItems: 'center',
    ImageBackground:'./images/Background-Pantry-Magic.jng',
  },
  image: {
    width: 350,
    height: 350,
  },
  getStarted: {
    fontSize: 32,
    fontWeight: '500',
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
  },
});