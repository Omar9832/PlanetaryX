import { useRouter } from "expo-router";
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Creditcardpayment() {
    const router = useRouter();
    

    return (
        <View style={styles.container2}>
            <View style={styles.container1}>
              <TouchableOpacity onPress={() => router.push("/Subscriptions")}>
                        <Text style={styles.backtext}>←Back</Text>
                      </TouchableOpacity>
                <Text style={styles.title}>
                  Complete Payment
                </Text>
                <View style={styles.container}>
                  <Text style={styles.subheader}>
                    You're upgrading to
                  </Text>
                  <Text style={styles.proplantext}>
                    Pro Plan
                  </Text>
                  <Text style={styles.subtitles}>
                    $9.99 / month
                  </Text>
                  <View style={styles.line}>

                  </View>
                  <Text style={styles.moreinfo}>
                    Billed monthly • Cancel anytime
                    
                  </Text>
                  <Text style={styles.moreinfo2}>
                    Full access to all premium features
                  </Text>
                </View>
                <Text style={styles.carddetailstext}>
                  💳 Card Details
                </Text>

                <Text style={styles.cardsubtitles}>
                  Card Number
                </Text>

                <View style={styles.textboxcontainer}>
                                            <TextInput
                                              style={styles.input}
                                              
                                              placeholderTextColor="#9CA3AF"
                                              
                                              
                
                                              
                    />
                    </View>

                  <Text style={styles.cardsubtitles}>
                    Cardholder Name
                  </Text>

                  <View style={styles.textboxcontainer}>
                                            <TextInput
                                              style={styles.input}
                                              
                                              placeholderTextColor="#9CA3AF"
                                              
                                              
                
                                              
                    />
                    </View>

                  <View style={styles.cardrow}>

                    <Text style={styles.cardsubtitles}>
                      Expiry Date
                    </Text>

                    <Text style={styles.cardsubtitles2}>
                      CVV
                    </Text>
                  </View>
                  <View style={styles.cardrow}>
                    <View style={styles.textboxcontainer2}>
                                            <TextInput
                                              style={styles.input}
                                              
                                              placeholderTextColor="#9CA3AF"
                                              
                                              
                
                                              
                    />
                    </View>


                    <View style={styles.textboxcontainer3}>
                                            <TextInput
                                              style={styles.input}
                                              
                                              placeholderTextColor="#9CA3AF"
                                              
                                              
                
                                              
                    />
                    </View>
                  </View>
                  
                  <TouchableOpacity style={styles.Paybutton} onPress={()=>router.push("/PaymentSuccess")}>
                    <Text style={styles.paytext}>
                      Pay $9.99
                    </Text>
                  </TouchableOpacity>


                  <TouchableOpacity style={styles.cancelbutton} onPress={()=>router.push("/Subscriptions")}>
                    <Text style={styles.canceltext}>
                      Cancel
                    </Text>
                  </TouchableOpacity>

                  <Text style={styles.confirmtext}>
                    By confirming, you agree to our Terms of Service
                  </Text>

                  <Text style={styles.confirmtext}>
                    and authorize monthly billing to your card
                  </Text>
                  
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
    title: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 20,
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
    width: 290,
    height: 50,
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: "#1A1B33",
  },

  backtext: {
    fontSize: 15,
    color: "aqua",
    fontWeight: "700",
    marginTop: 30,
    marginLeft: 20,
  },
  container: {
    backgroundColor: '#1A1B33',
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 180,
    marginLeft: 15,
    marginTop: 30,   
    borderRadius: 10,
    borderColor: "aqua",
    borderWidth: 2,
    
  },

  subtitles: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
    marginTop: 3,
    marginLeft:-120,
  },

  subheader: {
    fontSize: 15,
    color: "#9CA3AF",    
    marginTop: -5,
    marginLeft: -120, 
  },
  passwordrow:{
    flexDirection:'row'
  },

  proplantext:{
    color:"aqua",
    fontSize:30,
    fontWeight:"700",
    marginLeft:-130,
    marginTop: 5
  },
  line:{
    borderWidth:0.3,
    borderColor:'aqua',
    width:250,
    height:1,
    marginTop:10,
    marginLeft:5
  },
  moreinfo: {
    fontSize: 12,
    color: "#9CA3AF",    
    marginTop: 10,
    marginLeft: -70,
    fontWeight:'700' 
  },
  moreinfo2: {
    fontSize: 12,
    color: "#9CA3AF",    
    marginTop: 10,
    marginLeft: -50,
    fontWeight:'700' 
  },
  carddetailstext:{
    color:"#1085f1",
    fontSize:15,
    fontWeight:'700',
    marginTop:15,
    marginLeft:17
  },

  cardsubtitles: {
    fontSize: 13,
    color: "#9CA3AF",    
    marginTop: 10,
    marginLeft: 18,
    fontWeight:'700' 
  },
  cardrow:{
    flexDirection:'row'
  },
  cardsubtitles2: {
    fontSize: 13,
    color: "#9CA3AF",    
    marginTop: 10,
    marginLeft: 85,
    fontWeight:'700' 
  },

  textboxcontainer2: {
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 10,
    width: 140,
    height: 50,
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: "#1A1B33",
  },

  textboxcontainer3: {
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 10,
    width: 140,
    height: 50,
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: "#1A1B33",
  },

  Paybutton: {
    backgroundColor: "#08fa59",
    marginHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
    
    paddingHorizontal: 30,
    
    shadowColor: "#08fa59",
    shadowOffset: {width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,             
    elevation: 10,  
    marginLeft:15,
    width:300
  },
  paytext:{
    color:"black",
    fontSize:18,
    fontWeight:'700',
    textAlign:'center',
    
  },

  cancelbutton:{
    width:300,
    height:55,
    borderWidth:3,
    borderColor:'red',
    marginTop:15,
    marginLeft:20,
    borderRadius:10
    
  },
  canceltext:{
    fontSize:20,
    color:"red",
    fontWeight:700,
    textAlign:"center",
    marginTop:10
  },

  confirmtext:{
    fontWeight:'700',
    textAlign:"center",
    fontSize:12,
    color: "#9CA3AF",
    marginTop:5
  }

 
    
});