import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import ProductCard from "../Components/ProductCard";
import { Text, Form, TouchableOpacity, View, Input, StyleSheet, Flatlist } from "react-native";
import { TextInput } from "react-native-gesture-handler";



const CrimeReportScreen = (props) => {
  return (
    <SafeAreaView>
     <View style={styles.title}>
      <Text style={styles.titleText}>Complaint</Text>


      <TouchableOpacity onPress={() => {
            props.navigation.navigate("Profile");
          }}>
       
            <View style={styles.buttonSign}>
                <Text style={styles.buttonText}>Profile</Text>
               
            </View>

         
            

        </TouchableOpacity>


        
  
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Login");
          }}>
       
            <View style={styles.buttonLog}>
                <Text style={styles.buttonText}>Log Out</Text>
               
            </View>

        
           
            

        </TouchableOpacity>


        


       



     </View>


     <View style={styles.bg}>
            <Text>Welcome to Hushiar!</Text>
            <Text>The first Bangladeshi real-time crime reporting app.</Text>
           
        </View>



    </SafeAreaView>
  );
};

export default CrimeReportScreen;

const styles = StyleSheet.create({

    inputStyle: {
      borderWidth:1 ,
      borderColor: "rgba(0,0,0,0.3)", 
      fontSize:14,
      borderRadius: 125,
      marginTop: 25,
      padding: 10,
      paddingLeft:10,
      margin: 20,
      
    
      
    },

    buttonLog:{
        borderRadius: 50,
        padding: 5,
        
        width: 80,
        height: 35,
        paddingTop: 8,
        
        marginTop: 16,
      
      
      
        
      },
      
    buttonSign:{
        borderRadius: 50,
        padding: 5,
       
        width: 70,
        height: 35,
        paddingTop: 8,
        marginLeft: 80,
        marginTop: 16,
      
        
      },

    bg:{
        borderColor: "black",
        
        padding:10,
        borderWidth: 1,
        marginBottom: 10
        
      },
    button2:{
        borderRadius: 50,
        padding: 5,
        backgroundColor: "#0099ff",
        width: 100,
        height: 35,
        paddingTop: 8,
        
        marginTop: 16,
        
        marginBottom: 10,
        alignSelf: "center"
        
        
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

    input:{

    }
    
    
    })
