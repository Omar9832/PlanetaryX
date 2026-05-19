import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
        if (email === '' || password === '' || confirmPassword === '') {
            Alert.alert("Not Filled", "Please fill all the fields");
        } else if (password !== confirmPassword) {
            Alert.alert("Password Mismatch", "Passwords do not match");
      } else if (password.length < 6) {
            Alert.alert("Weak Password", "Password should be at least 6 characters long");
        } else if (!email.includes('@')) {
            Alert.alert("Invalid Email", "Please enter a valid email address");
        } else {
            try {
                const storedUsers = await AsyncStorage.getItem('users');
                const users = storedUsers ? JSON.parse(storedUsers) : {};

                if (users[email]) {
                    Alert.alert("Already Exists", "This email is already registered");
                    return;
                }


                users[email] = password; // add new user
                await AsyncStorage.setItem('users', JSON.stringify(users)); 
                await AsyncStorage.setItem('loggedInUser', email);
                await AsyncStorage.setItem('loggedInPass', password);


                Alert.alert("Success", "Account created!");
                router.push("/Home");
            } catch (err) {
                console.error(err);
                Alert.alert("Error", "Something went wrong");
            }
        }
    };

  //  const handleSignUp = async () => {
 // if (email === '' || password === '' || confirmPassword === '') {
  //  Alert.alert("Not Filled", "Please fill all the fields");
  //} else if (password !== confirmPassword) {
   // Alert.alert("Password Mismatch", "Passwords do not match");
  //} else if (password.length < 6) {
  //  Alert.alert("Weak Password", "Password should be at least 6 characters long");
 // } else if (!email.includes('@')) {
  //  Alert.alert("Invalid Email", "Please enter a valid email address");
 // } else {
   // router.push("/Home");
    //try {
      
      //const res = await fetch('http://10.0.2.2:3000/signup', {
        //method: 'POST',
        //headers: { 'Content-Type': 'application/json' },
       // body: JSON.stringify({ email, password }) // match your DB
      //});

      //const data = await res.json();

      //if (res.ok) {
        // Signup successful
       // Alert.alert("Success", "Account created!");
        //router.push("/Home"); // navigate to Home
      //} else {
        // Backend returned error (e.g., email already exists)
        //Alert.alert("Error", data.error);
      //}
    //} catch (err) {
    //  console.error(err);
    //  Alert.alert("Error", "Something went wrong");
   // }
    
  //}
//};


    return (
        <View style={styles.container2}>
            <View style={styles.container1}>
                <Text style={styles.title1}>Create Account</Text>
                <Text style={styles.subtitle}>Sign Up for PlanetaryX</Text>

                <View style={styles.textboxcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#9CA3AF"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.textboxcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#9CA3AF"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <View style={styles.textboxcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor="#9CA3AF"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={handleSignUp}>
                        <Text style={styles.buttontext}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.subtitlecontainer}>
                    <Text style={styles.subtitle2}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => router.push("/Login")}>
                        <Text style={styles.logintext}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#16172B',
        borderWidth: 30,
        borderRadius: 50,
        flex: 1,
        borderColor: '#1A1B33'
    },
    container2: {
        backgroundColor: '#1A1B33',
        flex: 1,
    },
    title1: {
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 100,
        marginLeft: 50,
    },
    subtitle: {
        fontSize: 15,
        color: "#9CA3AF",
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 55
    },
    input: {
        backgroundColor: '#1A1B33',
        borderRadius: 10,
        paddingHorizontal: 12,
        height: 50,
        color: '#E5E7EB',
        fontSize: 16,
    },
    textboxcontainer: {
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 10,
        width: 280,
        height: 50,
        marginLeft: 50,
        marginTop: 30,
        backgroundColor: '#1A1B33',
    },
    button: {
        borderWidth: 10,
        borderColor: '#7C3AED',
        borderRadius: 10,
        width: 280,
        height: 50,
        marginLeft: 50,
        marginTop: 30,
        backgroundColor: '#7C3AED'
    },
    buttontext: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    subtitle2: {
        fontSize: 13,
        color: "#9CA3AF",
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 90,
    },
    subtitlecontainer: {
        flexDirection: 'row',
        marginTop: 15
    },
    logintext: {
        fontSize: 13,
        color: "aqua",
        fontWeight: '700',
        marginTop: 10,
        marginLeft: 4,
    }
});

