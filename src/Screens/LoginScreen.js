import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import ProductCard from "../Components/ProductCard";
import { Text, Form, TouchableOpacity, View, Input, StyleSheet, Flatlist } from "react-native";
import { TextInput } from "react-native-gesture-handler";



const LoginScreen = (props) => {
  return (
    <SafeAreaView>
     <View style={styles.title}>
      <Text style={styles.titleText}>Log In</Text>
     </View>

     

     <View styles={styles.inputs}>
     <TextInput style = {styles.inputStyle} placeholder="Email"></TextInput>
     <TextInput style = {styles.inputStyle} placeholder="Password"></TextInput>
     
     
     <TouchableOpacity onPress={() => {
            props.navigation.navigate("Forgot");
          }}>
       
            <View style={styles.buttonForgot}>
                <Text style={styles.buttonTextForgot}>Forgot Password</Text>
               
            </View>

        
           
            

        </TouchableOpacity>
     </View>

     <View>
     <TouchableOpacity onPress={() => {
            props.navigation.navigate("Crime");
          }}>
       
            <View style={styles.button2}>
                <Text style={styles.buttonText}>Log In</Text>
               
            </View>

        
           
            

        </TouchableOpacity>
     </View>




     <View>
     <TouchableOpacity onPress={() => {
            props.navigation.navigate("AdminProfile");
          }}>
       
            <View style={styles.button4}>
                <Text style={styles.buttonText2}>Admin Log In</Text>
               
            </View>

        
           
            

        </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

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

    buttonForgot:{
        alignSelf: "center"
    },

    forgotPass:{
        alignSelf: "center"
    },
    
      
      buttonText:{
      
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
      },

      buttonText2:{
      
        color: 'black',
        fontWeight: 'bold',
        marginLeft:295,
        marginTop:20,
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

    input:{

    }
    
    
    })
