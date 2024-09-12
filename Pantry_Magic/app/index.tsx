import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios'; // para fazer requests
import React, { useEffect } from 'react';
import { Link } from 'expo-router';
import Button from '../components/Button';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/loginHome.webp')} style={styles.image} />
      <View style={[styles.textContainer, styles.centerContent]}>
        <Text style={styles.getStarted}>Get started</Text>
        <Text style={styles.description}>Sign up or login</Text>
      </View>
      <View style={[styles.buttonsContainer, styles.centerContent]}>
        <Link href={'/homePage'}>
          <Button label="Sign up" theme="primary"/>
        </Link>
        <Link href="./login">
          <Button label="Login" theme=""/>
        </Link>
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
  },
  image: {
    width: 350,
    height: 350,
  },
  textContainer: {
    gap: 10,
  },
  getStarted: {
    fontSize: 32,
    fontWeight: '500',
    color: '#253238',
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: '#253238',
  },
  buttonsContainer: {
    gap: 10,
  },
});