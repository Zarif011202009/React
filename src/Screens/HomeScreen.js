import React from "react";
import { Button, Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";


const HomeScreen = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <View style={styles.sideways}>
        <Text style={styles.homeText}>Hushiar</Text>


   
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Sign");
          }}>
       
            <View style={styles.buttonSign}>
                <Text style={styles.buttonText}>Sign Up</Text>
               
            </View>

         
            

        </TouchableOpacity>


        
  
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Login");
          }}>
       
            <View style={styles.buttonLog}>
                <Text style={styles.buttonText}>Log In</Text>
               
            </View>

        
           
            

        </TouchableOpacity>


        


        </View>

        <View style={styles.bg}>
            <Text>Welcome to Hushiar!</Text>
            <Text>The first Bangladeshi real-time crime reporting app.</Text>
            <TouchableOpacity onPress={() => {
            props.navigation.navigate("About");
          }}>
       
            <View style={styles.button2}>
                <Text style={styles.buttonText}>About Us</Text>
               
            </View>
            

        
           
            

        </TouchableOpacity>
        </View>


        <View style={styles.bg}>
            <Text>Don't have an account yet? </Text>
            <Text>Hushiar is free to use! Sign up today!</Text>
            <TouchableOpacity onPress={() => {
            props.navigation.navigate("Sign");
          }}>
       
            <View style={styles.button2}>
                <Text style={styles.buttonText}>Sign Up</Text>
               
            </View>
            

        
           
            

        </TouchableOpacity>
        </View>


        

        
    </SafeAreaView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
buttonLog:{
  borderRadius: 50,
  padding: 5,
  
  width: 60,
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
  marginLeft: 125,
  marginTop: 16,

  
},
button2:{
  borderRadius: 50,
  padding: 5,
  backgroundColor: "#3498DB",
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

sideways:{
  flexDirection:"row",
  backgroundColor: "#3498DB",
  
  

},

homeText:{
  fontSize:35,
  
  color: "white",
  padding: 10

  
  
}, 
bg:{
  borderColor: "black",
  
  padding:10,
  borderWidth: 1,
  marginBottom: 10
  
}

})
