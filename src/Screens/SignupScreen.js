import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import ProductCard from "../Components/ProductCard";
import { Text, Form, TouchableOpacity, View, Input, StyleSheet, Flatlist } from "react-native";
import { TextInput } from "react-native-gesture-handler";



const SignupScreen = (props) => {
  return (
    <SafeAreaView>
     <View style={styles.title}>
      <Text style={styles.titleText}>Create Account</Text>
     </View>

     <View styles={styles.inputs}>
     <TextInput style = {styles.inputStyle} placeholder="Name"></TextInput>
     <TextInput style = {styles.inputStyle} placeholder="Address"></TextInput>
     <TextInput style = {styles.inputStyle} placeholder="Phone Number"></TextInput>
     <TextInput style = {styles.inputStyle} placeholder="Email Address"></TextInput>
     <TextInput style = {styles.inputStyle} placeholder="Password"></TextInput>
     </View>

     <View>
     <TouchableOpacity onPress={() => {
            props.navigation.navigate("Profile");
          }}>
       
            <View style={styles.button2}>
                <Text style={styles.buttonText}>Sign Up</Text>
               
            </View>

        
           
            

        </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({

    inputStyle: {
      borderWidth:1 ,
      borderColor: "rgba(0,0,0,0.3)", 
      fontSize:14,
      borderRadius: 4,
      
      padding: 10,
      
      margin:10,
      marginTop:20,
      marginLeft:20,
      marginRight:20
      
      
    
      
    },
    button2:{
      borderRadius: 4,
      margin: 10,
      padding: 12,
      backgroundColor: "#3498DB",
      width: 100,
      height: 45,
      marginLeft:290,
      marginTop:20
    
        
        
      },
      
      buttonText:{
      
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
      },

    title:{
        
        flexDirection:"row",
        backgroundColor: "#3498DB",
    },

    titleText:{
        fontSize:35,
        color: 'white',
        padding: 10
    },

    inputs:{
     

    }
    
    
    })
