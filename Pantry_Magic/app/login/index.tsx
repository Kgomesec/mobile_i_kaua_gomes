import { StyleSheet, Text, View, Image, ImageBackground, TextInput } from 'react-native'
import axios from 'axios'; // para fazer requests
import React, { useEffect } from 'react';
import { Link } from 'expo-router';
import Button from '../../components/Button';

export default function Login() {
    const [text, onChangeText] = React.useState('Email');
    const [number, onChangeNumber] = React.useState('Password');
    return (
        <View style={styles.container}>
            <View style={[styles.centerContent, styles.container]}>
                <Image source={require('../../assets/images/hora-do-almoco.png')} style={styles.image} />
                <View style={[styles.textContainer, styles.centerContent]}>
                    <Text style={styles.getStarted}>Login</Text>
                    <Text style={styles.description}>Enter your login and password</Text>
                </View>
                <View style={[styles.inputsContainer, styles.centerContent]}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />
                    <View style={styles.flexEnd}>
                        <Text style={styles.textBold}>Forgot password?</Text>
                    </View>
                </View>
                <Link href="../homePage">
                    <View style={[styles.buttonsContainer, styles.centerContent]}>
                        <Button label="Login" theme="" />
                    </View>
                </Link>
                <Text>Don't have an account? <Link href={"../homePage"} style={styles.signUp}>Sign Up</Link></Text>
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
        width: 200,
        height: 200,
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
    input: {
        width: 345,
        height: 55,
        margin: 12,
        padding: 10,
        borderRadius: 12,
        backgroundColor: "white"
    },
    inputsContainer: {
        width: "100%",

    },
    signUp: {
        fontWeight: '700',
        color: '#1DCA69',
    },
    textBold: {
        fontWeight: '600',
    },
    flexEnd: {
        width: 345,
        alignItems: 'flex-end',
    }});