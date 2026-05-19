import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Subscriptions() {

  return (
    <View style={styles.container2}>
      <View style={styles.container1}>

        <TouchableOpacity onPress={() => router.push("/Home")}>
          <Text style={styles.backtext}>←Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Subscriptions</Text>

        <View style={styles.subbox}>
          <Text style={styles.subboxtext}>
            Current Plan: Free
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.subtitles}>Free</Text>
          <Text style={styles.pricetext}>$0/month</Text>

          <View style={styles.inforow1}>
            <Text style={styles.checkmarktext}>✓</Text>
            <Text style={styles.infotext1}>Check each Planet</Text>
          </View>

          <View style={styles.inforow2}>
            <Text style={styles.xmarktext}>✗</Text>
            <Text style={styles.infotext2}>Like adds</Text>
            
          </View>
          <View style={styles.currentplanbox}>
              <Text style={styles.currentplanboxText}>Current Plan</Text>
            </View>
        </View>

        <View style={styles.secondcontainer}>
          <Text style={styles.subtitles2}>Pro</Text>
          <Text style={styles.pricetext2}>$9.99/month</Text>

          <View style={styles.inforow3}>
            <Text style={styles.checkmarktext2}>✓</Text>
            <Text style={styles.infotext1}>Check each Planet</Text>
          </View>

          <View style={styles.inforow4}>
            <Text style={styles.checkmarktext3}>✓</Text>
            <Text style={styles.infotext1}>Compare Planets</Text>
          </View>

          <View style={styles.inforow4}>
            <Text style={styles.checkmarktext4}>✓</Text>
            <Text style={styles.infotext1}>Removes ads</Text>
          </View>

          <TouchableOpacity style={styles.currentplanbox2} onPress={() => router.push("/Creditcardpayment")}>
            <Text style={styles.currentplanboxText2}>Buy</Text>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "#1A1B33",
  },
  container1: {
    flex: 1,
    backgroundColor: "#16172B",
    borderWidth: 30,
    borderRadius: 50,
    borderColor: "#1A1B33",
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    marginTop: 30,
    marginLeft: 30,
  },
  subbox: {
    borderRadius: 10,
    width: 280,
    height: 50,
    marginLeft: 30,
    marginTop: 30,
    backgroundColor: '#1A1B33',
  },
  subboxtext: {
    fontSize: 20,
    fontWeight: "800",
    color: "#38BDF8",
    marginTop: 10,
    textAlign: "center",
    
  },
  container: {
    backgroundColor: '#1A1B33',
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 230,
    marginLeft: 30,
    marginTop: 30,   
    borderRadius: 10,
    borderColor: "aqua",
    borderWidth: 2,
  },
  subtitles: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
    marginTop: 1,
    marginLeft:-200,
  },
  backtext: {
    fontSize: 15,
    color: "aqua",
    fontWeight: "700",
    marginTop: 70,
    marginLeft: 20,
  },
  pricetext: {
    fontSize: 20,
    color: "aqua",
    fontWeight: "700",
    marginTop: 5,
    marginLeft:-150,
  },
  inforow1:{
    flexDirection: "row",
    marginLeft:-110,
    marginTop:10,
  },
  inforow2:{
    flexDirection: "row",
    marginLeft:-165,
  },
  infotext1:{
    fontSize: 15,
    color: "white",
    fontWeight: "700",
    marginLeft:20,
   
  },
  checkmarktext:{
    fontSize: 15,
    color: "aqua",
    fontWeight: "700",
    marginLeft:35,
  },
  infotext2:{
    fontSize: 15,
    color: "grey",
    fontWeight: "700",
    marginLeft:25,
   marginTop:10,
   textDecorationLine:"line-through",
   textDecorationStyle:"solid",
  },
  xmarktext:{
    fontSize: 20,
    color: "grey",  
    marginLeft:33,
    marginTop:5,
    
    
  },

  currentplanbox: {
    backgroundColor: "#38BDF8",
    marginHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    width:250,
  },
  currentplanboxText: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
  secondcontainer: {
    backgroundColor: '#1A1B33',
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 270,
    marginLeft: 30,
    marginTop: 30,   
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 2,
  },

  pricetext2: {
    fontSize: 20,
    color: "aqua",
    fontWeight: "700",
    marginTop: 5,
    marginLeft:-115,
  },
  inforow3:{
    flexDirection: "row",
    marginLeft:-110,
    marginTop:10,
    marginBottom:10,
  },
  inforow4:{
    flexDirection: "row",
    marginLeft:-165,
    marginBottom:10,
  },
  infotext3:{
    fontSize: 15,
    color: "white",
    fontWeight: "700",
    marginLeft:20,
   
  },
  checkmarktext2:{
    fontSize: 15,
    color: "aqua",
    fontWeight: "700",
    marginLeft:45,
  },
  infotext4:{
    fontSize: 15,
    color: "grey",
    fontWeight: "700",
    marginLeft:25,
   marginTop:20,
   textDecorationLine:"line-through",
   textDecorationStyle:"solid",
  },
  xmarktext2:{
    fontSize: 20,
    color: "grey",  
    marginLeft:33,
    marginTop:5,
    
    
  },

  currentplanbox2: {
    backgroundColor: "orange",
    marginHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 5,
    width:250,
  },
  currentplanboxText2: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
  subtitles2: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
    marginTop: 1,
    marginLeft:-200,
  },
  checkmarktext3:{
    fontSize: 15,
    color: "aqua",
    fontWeight: "700",
    marginLeft:95,
  },
  checkmarktext4:{
    fontSize: 15,
    color: "aqua",
    fontWeight: "700",
    marginLeft:70,
  },
  
});
