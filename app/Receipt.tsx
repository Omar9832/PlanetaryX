// app/home.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Print from "expo-print";
import { router } from "expo-router";
import * as Sharing from "expo-sharing";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { captureRef } from "react-native-view-shot";

export default function Receipt() {
  const receiptRef = useRef<View>(null);
  const [email, setEmail] = useState("");
  const [pdfUrl, setPdfUrl] = useState(""); // URL for QR code

  useEffect(() => {
    const fetchEmail = async () => {
      const loggedInEmail = await AsyncStorage.getItem("loggedInUser");
      if (loggedInEmail) setEmail(loggedInEmail);
    };
    fetchEmail();
  }, []);

  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const formatted = now.toLocaleString("en-US", options);

  // ✅ Capture receipt, generate PDF, upload to file.io, update QR code
  const generateAndSharePDF = async () => {
    try {
      // 1️⃣ Capture receipt
      const base64 = await captureRef(receiptRef, {
        format: "png",
        quality: 1,
        result: "base64",
      });

      // 2️⃣ Wrap in HTML
      const html = `
        <html>
          <body style="margin:0; padding:0; background:white;">
            <img src="data:image/png;base64,${base64}" style="width:100%; display:block;" />
          </body>
        </html>
      `;

      // 3️⃣ Generate PDF locally
      const pdf = await Print.printToFileAsync({ html, base64: false });

      // 4️⃣ Share PDF immediately
      await Sharing.shareAsync(pdf.uri);

      // 5️⃣ Upload to file.io for QR
      const fileData = await fetch(pdf.uri);
      const blob = await fileData.blob();
      const formData = new FormData();
      formData.append("file", blob);

      const uploadResp = await fetch("https://file.io", {
        method: "POST",
        body: formData,
      });
      const uploadJson = await uploadResp.json();

      if (uploadJson.success) {
        setPdfUrl(uploadJson.link); // QR code now points to the uploaded PDF
      } else {
        console.warn("Upload failed:", uploadJson);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container2}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => router.push("/PaymentSuccess")}>
          <Text style={styles.backtext}>←Back</Text>
        </TouchableOpacity>

        <ScrollView
          style={styles.container3}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          <View ref={receiptRef} collapsable={false}>
            {/* 🌍 Header */}
            <Text style={styles.earthtext}>🌍</Text>
            <Text style={styles.title}>PlanetaryX</Text>
            <Text style={styles.exploretext}>Explore the Solar System</Text>

            {/* Payment Box */}
            <View style={styles.paymentbox}>
              <Text style={styles.paymentext}>PAYMENT RECEIPT</Text>
            </View>
            <View style={styles.line}></View>

            {/* Details */}
            <View style={styles.receiptrow}>
              <Text style={styles.subtitle}>Date & Time</Text>
              <Text style={styles.fieldtext}>{formatted}</Text>
            </View>
            <View style={styles.receiptrow}>
              <Text style={styles.subtitle}>Customer</Text>
              <Text style={styles.fieldtext2}>{email}</Text>
            </View>
            <View style={styles.receiptrow}>
              <Text style={styles.subtitle}>Status</Text>
              <Text style={styles.fieldtext3}>✓ Successful</Text>
            </View>
            <View style={styles.line}></View>

            {/* Order Details */}
            <Text style={styles.orderdetailstext}>Order Details</Text>
            <View style={styles.receiptrow}>
              <Text style={styles.subtext}>Pro Monthly Subscription</Text>
              <Text style={styles.moneytext}>$9.99</Text>
            </View>
            <Text style={styles.timetext}>1 month access • Renews Feb 28, 2026</Text>
            <View style={styles.line}></View>

            {/* Payment Summary */}
            <Text style={styles.orderdetailstext}>Payment Summary</Text>
            <View style={styles.receiptrow}>
              <Text style={styles.subtext2}>Subtotal</Text>
              <Text style={styles.moneytext2}>$9.99</Text>
            </View>
            <View style={styles.receiptrow}>
              <Text style={styles.subtext2}>Tax (0%)</Text>
              <Text style={styles.moneytext3}>$0.00</Text>
            </View>
            <View style={styles.receiptrow}>
              <Text style={styles.subtext2}>Discount</Text>
              <Text style={styles.moneytext4}>-$0.00</Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.receiptrow}>
              <Text style={styles.totaltext}>Total Paid</Text>
              <Text style={styles.moneytext5}>$9.99</Text>
            </View>
            <View style={styles.line2}></View>

            {/* Payment Method */}
            <Text style={styles.paymentmethodtext}>Payment Method</Text>
            <View style={styles.visa_box}>
              <View style={styles.receiptrow}>
                <Text style={styles.cardtext}>💳</Text>
                <Text style={styles.endingtext}>Visa ending in</Text>
              </View>
            </View>
            <View style={styles.line2}></View>

            {/* QR Code */}
            <View style={{ alignItems: "center", marginTop: 30 }}>
              <QRCode
                value="https://abcd1234.ngrok.io/receipt/12345"
                size={150}
                color="black"
                backgroundColor="white"
                  />
            </View>

            {/* Footer */}
            <Text style={styles.subtitles}>Thank you for your purchase!</Text>
            <Text style={styles.subtitles}>Questions? Contact us at</Text>
            <Text style={styles.subtitles}>support@planetaryx.com</Text>
            <Text style={styles.subtitles}>This is an automated receipt. No signature</Text>
            <Text style={styles.subtitles}>required.</Text>

            <View style={styles.receiptrow}>
              <TouchableOpacity style={styles.download_box} onPress={generateAndSharePDF}>
                <Text style={styles.download_text}>Download PDF</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

// ... your styles remain the same



const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "#1A1B33",
  },
  container3: {
    
    backgroundColor: "white",
    marginTop:60,
    borderRadius: 20,
    borderColor:'#1A1B33',
    paddingBottom: 20,
    flex:1
  },

  container1: {
    flex: 1,
    backgroundColor: '#16172B',
    borderWidth: 30,
    borderRadius: 50,
    borderColor:'#1A1B33',
    paddingBottom: 20,
  },

  box: {
    height: 100,
    backgroundColor: '#262736',
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  earthtext:{
    textAlign:"center",
    fontSize:50,
    marginTop:40
  },

  title:{
    color:"aqua",
    textAlign:"center",
    fontSize:27,
    fontWeight:"700",
    marginTop:10
  },

  receiptrow:{
    flexDirection:"row"
  },
  exploretext:{
    textAlign:"center",
    fontSize:15,
    fontWeight:"700",
    marginTop:2,
    color:"grey"
  },
  paymentbox:{
    backgroundColor:"#08fa59",
    borderRadius:10,
    width:140,
    height:30,
    alignSelf:"center",
    marginTop:10
  },
  paymentext:{
    color:"white",
    fontWeight:'700',
    fontSize:12,
    textAlign:"center",
    marginTop:7
  },

  line:{
    borderWidth:0.3,
    
    width:270,
    height:1,
    marginTop:15,
    marginLeft:20,
    textDecorationStyle:"dashed",
    
  },
  subtitle:{
    color:"grey",
    fontWeight:"700",
    fontSize:15,
    marginTop:5,
    marginLeft:20
  },
  fieldtext:{
    color:"black",
    fontWeight:'700',
    fontSize:15,
    marginTop:5,
    marginLeft:20

  },
  fieldtext2:{
    color:"black",
    fontWeight:'700',
    fontSize:15,
    marginTop:5,
    marginLeft:38

  },

  fieldtext3:{
    color:"green",
    fontWeight:'700',
    fontSize:15,
    marginTop:5,
    marginLeft:120

  },

    orderdetailstext:{
      color:'black',
      fontSize:20,
      fontWeight:'700',
      marginLeft:20
    },
    timetext:{
    color:"grey",
    fontWeight:'700',
    fontSize:12,

    marginLeft:20

    },
    subtext:{
      
    color:"grey",
    fontWeight:'700',
    fontSize:15,

    marginLeft:20,
    

    
    },

    subtext2:{
      
    color:"grey",
    fontWeight:'700',
    fontSize:15,

    marginLeft:20,
    marginTop:20
    

    
    },

    moneytext:{
      color:"black",
    fontWeight:'700',
    fontSize:15,

    marginLeft:45
    },

    moneytext2:{
      color:"black",
    fontWeight:'700',
    fontSize:15,

    marginLeft:163,
    marginTop:20
    },

    moneytext3:{
      color:"black",
    fontWeight:'700',
    fontSize:15,

    marginLeft:158,
    marginTop:20
    },

    moneytext4:{
      color:"black",
    fontWeight:'700',
    fontSize:15,

    marginLeft:155,
    marginTop:20
    },

    backtext: {
    fontSize: 15,
    color: "aqua",
    fontWeight: "700",
    marginTop: 30,
    marginLeft: 20,
  },

  moneytext5:{
      color:"#08fa59",
    fontWeight:'700',
    fontSize:25,

    marginLeft:107,
    marginTop:10
    },

    totaltext:{
      color:'black',
      fontSize:23,
      fontWeight:'700',
      marginTop:10,
      marginLeft:20
    },
    visa_box:{
      backgroundColor:'#dfdfde',
      borderRadius:5,
      width:270, 
      height:70,
      marginLeft:20,
      marginTop:10
    },

    paymentmethodtext:{
      color:'black',
      fontSize:18,
      fontWeight:'700',
      marginTop:10,
      marginLeft:20
    },
    cardtext:{
      fontSize:40,
      textAlign:"left",
      marginLeft:15
    },
    endingtext:{
      color:"black",
      fontSize:18,
      fontWeight:"700",
      marginTop:15,
      marginLeft:15
    },

    subtitles:{
      color:'black',
      fontSize:12,
      fontWeight:'700',
      textAlign:"center",
      marginTop:5
    },

    download_box:{
      backgroundColor:"#08a1fa",
      borderRadius:10,
      borderWidth:2,
      borderColor:'grey',
      width:150,
      height:50,
      marginTop:20,
      marginLeft:20
    },

    share_box:{
      backgroundColor:"#08fa59",
      borderRadius:10,
      borderWidth:2,
      borderColor:'aqua',
      width:150,
      height:50,
      marginTop:20,
      marginLeft:10
    },

    download_text:{
      color:"black",
      fontSize:15,
      fontWeight:'700',
      textAlign:'center',
      marginTop:11
    },

    share_text:{
      color:"white",
      fontSize:15,
      fontWeight:'700',
      textAlign:'center',
      marginTop:11
    },
    line2:{
    borderWidth:0.3,
    
    width:270,
    height:1,
    marginTop:40,
    marginLeft:20,
    textDecorationStyle:"dashed",
    
  },
});


