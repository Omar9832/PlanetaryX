import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async () => {
  // 1️⃣ Basic validation
  if (email === '' || password === '') {
    Alert.alert("Not Filled", "Please fill all the fields");
    return;
  }

  if (!email.includes('@')) {
    Alert.alert("Invalid Email", "Please enter a valid email address");
    return;
  }

  if (password.length < 6) {
    Alert.alert("Weak Password", "Password should be at least 6 characters long");
    return;
  }

  try {
    const storedUsers = await AsyncStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : {};

    // 2️⃣ Check if user exists
    if (!users[email]) {
      Alert.alert("User Not Found", "Email does not exist");
      return;
    }

    // 3️⃣ Check password
    if (users[email] !== password) {
      Alert.alert("Incorrect Password", "The password you entered is incorrect");
      return;
    }

    // 4️⃣ Successful login
    await AsyncStorage.setItem('loggedInUser', email);
    await AsyncStorage.setItem('loggedInPass', password);

    router.push("/Home");

  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Something went wrong. Please try again.");
  }
};


                

                
                

                
                
           // } catch (err) {
           //     console.error(err);
           //     Alert.alert("Error", "Something went wrong");
           // }


      //}

  
  
    //}

    

//const handleLogin = async () => {
  //if (!email || !password) {
    //Alert.alert("Not Filled", "Please fill all the fields");
    //return;
  //}
  //if (!email.includes('@')) {
    //Alert.alert("Invalid Email", "Please enter a valid email address");
   // return;
  //}
 // if (password.length < 6) {
  //  Alert.alert("Weak Password", "Password should be at least 6 characters long");
   // return;
 // }

   // router.push("/Home");
  //try {
   // const res = await fetch('http://10.0.2.2:3000/login', {
   //   method: 'POST',
    //  headers: { 'Content-Type': 'application/json' },
    //  body: JSON.stringify({ email, password })
   // });

    // Read response as text first
   // const text = await res.text();
    //console.log("Server response text:", text);

    // Try parsing JSON
    //let data;
   // try {
    //  data = JSON.parse(text);
   // } catch (err) {
    //  console.error("Failed to parse JSON:", err);
    //  Alert.alert("Server Error", "Unexpected response from server. Check console.");
    //  return;
    //}

    // Handle backend responses
    //if (res.ok) {
    //  Alert.alert("Success", "Logged in!");
    //  await AsyncStorage.setItem('loggedInUser', email);
    //  await AsyncStorage.setItem('loggedInUserId', String(data.userId));
    //  router.push("/Home");
    //} else {
   //   Alert.alert("Login Failed", data.error || "Unknown error");
   // }

  //} catch (err) {
   // console.error("Login error:", err);
   // Alert.alert("Error", "Cannot reach server. Make sure your backend is running and the URL is correct.");
  //}


//};

    

    

  return (
    <View style={styles.container2}>
    <View style={styles.container1}>
      <Text style={styles.title1}>Welcome Back</Text>
      <Text style={styles.subtitle}>Login to PlanetaryX</Text>
      
      <View style={styles.textboxcontainer}>
        <TextInput
  style={styles.input}
  placeholder="Email"
  placeholderTextColor="#9CA3AF"
  value={email}
  onChangeText={setEmail}
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
      

      <View style={styles.button}>
        <TouchableOpacity onPress={handleLogin}>

            <Text style={styles.buttontext}>
                Login
            </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subtitlecontainer}>

      
        <Text style={styles.subtitle2}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/SignUp")}>

            <Text style={styles.logintext}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        
        
        
        
      
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container1:{

        backgroundColor: '#16172B',
        borderWidth:30,
        
        borderRadius:50,
        flex:1,
        borderColor:'#1A1B33'
        
        
    },
    container2:{

        backgroundColor: '#1A1B33',
        flex:1,
        
        
        
    },
    title1:{
        fontSize:35,
        color:'white',
        fontWeight:'bold',
        marginTop:100,
        marginLeft:50,



    },
    subtitle:{
        fontSize:15,
        color: "#9CA3AF",
        fontWeight:'bold',
        marginTop:10,
        marginLeft:55
        



    },
    input: {
      backgroundColor: '#1A1B33',
      borderRadius: 10,
      paddingHorizontal: 12,
      height: 50,
      color: '#E5E7EB',
      fontSize: 16,
      

}, textboxcontainer:{
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:10,
        width:280,
        height:50,
        marginLeft:50, 
        marginTop:30,
        backgroundColor:'#1A1B33',
    },
    button:{
        borderWidth:10,
        borderColor:'#7C3AED',
        borderRadius:10,
        width:280,
        height:50,
        marginLeft:50, 
        marginTop:30,
        backgroundColor: '#7C3AED'
    },
    buttontext:{
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    subtitle2:{
        fontSize:13,
        color: "#9CA3AF",
        fontWeight:'bold',
        marginTop:10,
        marginLeft:90,
        
    },
    subtitlecontainer:{
        flexDirection:'row',
        marginTop:15
    
    },
    logintext:{
        fontSize:13,
        color: "aqua",
        fontWeight:'700',
        marginTop:10,
        marginLeft:4,
    }


})