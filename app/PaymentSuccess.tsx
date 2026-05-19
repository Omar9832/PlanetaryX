import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PaymentSuccess() {
    


      
  return (
    <View style={styles.container2}>
          <View style={styles.container1}>
            <View style={styles.successcircle}>
                <Text style={styles.checkmarktext}>
                    ✓
                </Text>
            </View>
            <Text style={styles.paymenttext}>
                Payment 
            </Text>
            <Text style={styles.paymenttext}>
                Successful!
            </Text>
            <Text style={styles.subtitles}>Welcome to PlanetaryX Pro!</Text>
            <Text style={styles.subtitles}>You now have access to all</Text>
            <Text style={styles.subtitles}>premium features.</Text>
            <View style={styles.Probutton}>
                <Text style={styles.protext}>
                    ⭐ PRO MEMBER
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.benefittext}>
                    Your Pro Benefits
                </Text>
                <View style={styles.benefitrow}>
                    <Text style={styles.smallcheckmarktext}>
                       ✓ 
                    </Text>
                    <Text style={styles.probenefittext1}>
                        All planets unlocked
                    </Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.benefitrow}>
                    <Text style={styles.smallcheckmarktext2}>
                       ✓ 
                    </Text>
                    <Text style={styles.probenefittext2}>
                        Compare planets
                    </Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.benefitrow}>
                    <Text style={styles.smallcheckmarktext3}>
                       ✓ 
                    </Text>
                    <Text style={styles.probenefittext3}>
                        Ad-free experience
                    </Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.benefitrow}>
                    <Text style={styles.smallcheckmarktext4}>
                       ✓ 
                    </Text>
                    <Text style={styles.probenefittext4}>
                        Priority support
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.explorebutton} onPress={()=> router.push("/planets")}>
                <Text style={styles.exploretext}>
                    Start Exploring 🚀
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.receiptbutton} onPress={()=> router.push("/Receipt")}>
                <Text style={styles.receipttext}>
                    View Receipt
                </Text>
            </TouchableOpacity>
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
    benefitrow:{
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

  successcircle:{
    backgroundColor:"#08fa59",
    borderRadius:100,
    width:160,
    height:160,
    marginLeft:90,
    marginTop:80,

    
   
  },
  checkmarktext:{
    fontSize:70,
    fontWeight:'700',
    color:"white",
    textAlign:"center",
    marginTop:30
  },
  paymenttext:{
    color:"#08fa59",
    fontWeight:'700',
    textAlign:"center",
    fontSize:40
  },

  subtitles: {
    fontSize: 15,
    color: "#9CA3AF",    
    
    fontWeight:'700' ,
    textAlign:"center",
    paddingTop:3
  },
  Probutton: {
    backgroundColor: "#fa7508",

    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
    
    paddingHorizontal: 30,
    
    shadowColor: "#f87306",
    shadowOffset: {width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,             
    elevation: 1,  
    marginLeft:75,
    height:50,
    width:210,

    
  },

  protext:{
    color:"white",
    fontWeight:'700',
    fontSize:18,
    textAlign:"center",
    marginTop:12,
    marginLeft:-10
  },

  

  proplantext:{
    color:"aqua",
    fontSize:30,
    fontWeight:"700",
    marginLeft:-130,
    marginTop: 5
  },
  line:{
    borderWidth:0.2,
    borderColor:'grey',
    width:190,
    height:0.5,
    marginTop:10,
    marginLeft:-10
  },
   container: {
    backgroundColor: '#1A1B33',
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 190,
    marginLeft: 55,
    marginTop: 15,   
    borderRadius: 10,
    borderColor: "#08fa59",
    borderWidth: 2,
    
  },
    benefittext:{
        color:"#08fa59",
        fontWeight:'700',
        textAlign:"center",
        fontSize:25
    },

    smallcheckmarktext:{
        fontSize:17,
        fontWeight:'700',
        color:"white",
        textAlign:"center",
        marginTop:4,
        marginLeft:-40
    },
    smallcheckmarktext2:{
        fontSize:17,
        fontWeight:'700',
        color:"white",
        textAlign:"center",
        marginTop:4,
        marginLeft:-60
    },
    smallcheckmarktext3:{
        fontSize:17,
        fontWeight:'700',
        color:"white",
        textAlign:"center",
        marginTop:4,
        marginLeft:-50
        
    },
    smallcheckmarktext4:{
        fontSize:17,
        fontWeight:'700',
        color:"white",
        textAlign:"center",
        marginTop:4,
        marginLeft:-75
    },

    probenefittext1:{
        color:"white",
        fontWeight:'700',
        fontSize:15,
        marginLeft:10,
        marginTop:5
    },
    probenefittext2:{
        color:"white",
        fontWeight:'700',
        fontSize:15,
        marginLeft:10,
        marginTop:5
    },
    probenefittext3:{
        color:"white",
        fontWeight:'700',
        fontSize:15,
        marginLeft:10,
        marginTop:5
    },
    probenefittext4:{
        color:"white",
        fontWeight:'700',
        fontSize:15,
        marginLeft:10, 
        marginTop:5
    },
    explorebutton: {
        backgroundColor: "aqua",
        marginHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 20,
        
        paddingHorizontal: 30,
        
        shadowColor: "aqua",
        shadowOffset: {width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,             
        elevation: 10,  
        marginLeft:40,
        width:300
  },
  

  receiptbutton:{
    width:300,
    height:55,
    borderWidth:3,
    borderColor:'aqua',
    marginTop:15,
    marginLeft:40,
    borderRadius:10
    
  },

  exploretext:{
    color:"black",
    fontSize:18,
    fontWeight:'700',
    textAlign:'center',
    
  },

  receipttext:{
    fontSize:20,
    color:"aqua",
    fontWeight:700,
    textAlign:"center",
    marginTop:10
  },
    
    }
);




