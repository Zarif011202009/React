import React from "react";
import { Button, Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { TouchableOpacity, StyleSheet, ImageBackground, Image } from "react-native";


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

      

        








        <ImageBackground source={require('../Components/imagesFile/img_home_bg.jpg')} style={styles.bgContent} imageStyle={styles.bgImg}>
          <View style={styles.bg}>

            
            
          



            <TouchableOpacity onPress={() => {
            props.navigation.navigate("Sign");
          }}>
       
            <View style={styles.button2}>
                <Text style={styles.buttonText}>Sign Up</Text>
               
            </View>
            

        
           
            

        </TouchableOpacity>







        
            
          



            <TouchableOpacity onPress={() => {
            props.navigation.navigate("About");
          }}>
       
            <View style={styles.button2}>
                <Text style={styles.buttonText}>About Us</Text>
               
            </View>
            

        
           
            

        </TouchableOpacity>

        </View>
        </ImageBackground>

        

        
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

bg:{
  
  
padding:100,
paddingTop:200,

alignContent:"center"

  
  

  
},

bgText:{
  fontWeight: "bold",
  fontSize: 14,
  textShadowColor: "black",
  color: "white",
  marginLeft:30


},

bgImg:{
  opacity:1
    
},
bgContent:{
  textShadowColor:"black",
  flex:1
},

imageStyle:{

  width: 100,
  height:100

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
  borderRadius: 4,
  margin: 10,
  padding: 12,
  backgroundColor: "#3498DB",
  width: 100,
  height: 45,
  alignSelf:"center"


  
  
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


})
