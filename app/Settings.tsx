import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Settings() {
    const router = useRouter();
      const [email, setEmail] = useState<string>("");
      const [showPassword, setShowPassword] = useState(false);

    
      useEffect(() => {
        const fetchEmail = async () => {
          const loggedInEmail = await AsyncStorage.getItem("loggedInUser");
          if (loggedInEmail) {
            
            setEmail(loggedInEmail);
          }
        };
        fetchEmail();
      }, [])
      const [pass, setPass] = useState<string>("");
    
      useEffect(() => {
        const fetchPass = async () => {
          const storedPass = await AsyncStorage.getItem("loggedInPass");
          if (storedPass) {
            
            setPass(storedPass);
          }
        };
        fetchPass();
      }, [])
      const passShown =  () => {
        if (showPassword==true){
          setShowPassword(false);
        }
        else{
          setShowPassword(true);
        }
      }
      const SaveChanges = async () => {
  try {
    const storedUsers = await AsyncStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : {};

    const loggedInEmail = await AsyncStorage.getItem("loggedInUser");
    const storedPass = await AsyncStorage.getItem("loggedInPass");

    // Remove old email entry if email changed
    if (loggedInEmail && loggedInEmail !== email) {
      delete users[loggedInEmail];
    }

    // Update the users object with new email/password
    users[email] = pass;

    // Save everything back to AsyncStorage
    await AsyncStorage.setItem('users', JSON.stringify(users));
    await AsyncStorage.setItem('loggedInUser', email);
    await AsyncStorage.setItem('loggedInPass', pass);

    // Decide which alert to show
    if (storedPass !== pass && loggedInEmail !== email) {
      Alert.alert("Success", "Email and Password successfully changed!");
    } else if (storedPass !== pass) {
      Alert.alert("Success", "Password successfully changed!");
    } else if (loggedInEmail !== email) {
      Alert.alert("Success", "Email successfully changed!");
    } 

  } catch (err) {
    console.error(err);
    Alert.alert("Error", "Failed to save changes");
  }
};


      
  return (
    <View style={styles.container2}>
          <View style={styles.container1}>
            <TouchableOpacity onPress={() => router.push("/Home")}>
              <Text style={styles.backtext}>←Back</Text>
                </TouchableOpacity>
            <Text style={styles.title}>
                Settings
            </Text>
            <View style={styles.accountinfbox}>
                <Text style={styles.subtitle}>
                    Account Information
                </Text>
                <Text style={styles.subheader}>
                    Email
                </Text>
                <View style={styles.textboxcontainer}>
                            <TextInput
                              style={styles.input}
                              placeholder="Enter Planet Name..."
                              placeholderTextColor="#9CA3AF"
                              value={email}
                              onChangeText={setEmail}
                              

                              
                            />
                          </View>
                          <Text style={styles.subheader}>
                    Password
                </Text>
                <View style={styles.passwordrow}>
                <View style={styles.textboxcontainer}>
                            <TextInput
                              style={styles.input}
                              placeholder="Enter Planet Name..."
                              placeholderTextColor="#9CA3AF"
                              value={pass}
                              onChangeText={setPass}
                              
                              secureTextEntry={!showPassword}
                            
                            />
                          </View>
              <TouchableOpacity onPress={passShown}>
              <Image
                source={require('./imgs/eye.png')}
                style={{ width: 40, height: 40, marginTop:25, marginLeft:-20


                 } }
              />
              </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.subbox}>
              <Text style={styles.subtitle}>
                Subscriptions
              </Text>
              <View style={styles.passwordrow}>
              <Text style={styles.subheader}>
                Current Plan
              </Text>
              <View style={styles.freebox}>
                <Text style={styles.freetext}>
                  FREE
                </Text>
              </View>
              </View>

            </View>
            <View style={styles.actionbox}>
              <Text style={styles.subtitle}>
                Actions
              </Text>
              <TouchableOpacity style={styles.changebox} onPress={SaveChanges}>
                <Text style={styles.changetext}>Save Changes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.logoutbox} onPress={()=>{router.push("/")}}>
              <Text style={styles.logouttext}>
                Logout
              </Text>
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
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    marginTop: 30,
    marginLeft: 30,
  },
  input: {
    backgroundColor: "#262736",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 50,
    color: "#E5E7EB",
    fontSize: 16,
  },
  textboxcontainer: {
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 10,
    width: 250,
    height: 50,
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: "#1A1B33",
  },
    accountinfbox: {
    backgroundColor: "#1A1B33",
    width: 300,
    height: 300,
    borderRadius:10,
    marginLeft: 20,
    marginTop: 30,
    

  },
  subtitle: {
    fontSize: 23,
    color: "white",
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 20,
  },
  subheader: {
    fontSize: 15,
    color: "#9CA3AF",    
    marginTop: 15,
    marginLeft: 20, 
  },
  passwordrow:{
    flexDirection:'row'
  },
  subbox: {
    backgroundColor: "#1A1B33",
    width: 300,
    height: 100,
    borderRadius:10,
    marginLeft: 20,
    marginTop: 30,
    

  },
  freebox:{
    width:70, 
    height:35,
    backgroundColor:"aqua",
    borderRadius:20,
    marginLeft:100,
    marginTop:5
  },
  freetext:{
    fontSize:15,
    color:"black",
    fontWeight:'700',
    textAlign:"center",
    marginTop:6
  },
  actionbox: {
    backgroundColor: "#1A1B33",
    width: 300,
    height: 200,
    borderRadius:10,
    marginLeft: 20,
    marginTop: 30,
    

  },
  changebox:{
    width:250,
    height:45,
    backgroundColor:'aqua',
    borderRadius:10,
    marginTop:15,
    marginLeft:20
    
  },
  logoutbox:{
    width:250,
    height:45,
    borderWidth:3,
    borderColor:'red',
    marginTop:15,
    marginLeft:20,
    borderRadius:10
    
  },
  changetext:{
    fontSize:15,
    color:"black",
    fontWeight:700,
    textAlign:"center",
    marginTop:10
  },
  logouttext:{
    fontSize:15,
    color:"red",
    fontWeight:700,
    textAlign:"center",
    marginTop:10
  },
  
  backtext: {
    fontSize: 15,
    color: "aqua",
    fontWeight: "700",
    marginTop: 70,
    marginLeft: 20,
  },

 
}
);