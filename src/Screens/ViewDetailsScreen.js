import React from "react";
import { Button, Text, View, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import ProductCard from "../Components/ProductCard";


const ViewDetailsScreen = (props) => {
  return (

       <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <View style={styles.sideways}>
        <Text style={styles.homeText}>Details</Text>


   
       

        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Crime");
          }}>
       
            <View style={styles.buttonComplaints}>
                <Text style={styles.buttonText}>Complaint</Text>
               
            </View>

         
            

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Profile");
          }}>
       
            <View style={styles.buttonProfile}>
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




        

         




            





           


        <ScrollView>

        <View style={styles.complaints}>
                  

         

                  <View style={styles.history}>
                 
                      <Text>Complaint ID: #23</Text>
                      <Text>Date: 29/05/22 04:23 PM</Text>
                      <Text>Category: Harassment</Text>
                      <Text>Condition: Minor Injuries</Text>
                      
                      <Text>Perpetrator(s) still on scene</Text>
                      <Text>Location: East Rampura</Text>
                      <Text>Priority: 4</Text>
                     


                  </View>


                  

 















            

                  

           
                  

        </View>

        </ScrollView>

    </SafeAreaView>
  );
};

export default ViewDetailsScreen;


const styles = StyleSheet.create({


  historyButton:{
    flexDirection:"row",
    borderWidth:0.5,
    marginTop:10,
    padding:10
  },


  history:{
    
      
      
  },

  complaints:{
      margin:10,
      padding:10,
      borderWidth:1,

  },

  nameText:{
      fontSize:16,
      fontWeight:"bold"
  },

  button2:{
    borderRadius: 4,
    
    padding: 12,
    backgroundColor: "#3498DB",
    width: 100,
    height: 45,
    marginLeft:125,
    marginTop:30
  
      
      
    },

    button3:{
      borderRadius: 4,
      
      padding: 12,
      backgroundColor: "#3498DB",
      width: 120,
      height: 45,
      marginLeft:60,
      marginTop:4
    
        
        
      },
  


  imgBox:{
    margin:10,
    borderWidth:1,
    borderColor:"black",
    padding:10

  },

  textProfile:{
      marginLeft:20
  },

  imgSideways:{
      flexDirection: "row"
  },

  imgStyle:{
    width:120,
    height:140
  
  },
 

  
homeText:{
  fontSize:35,
  
  color: "white",
  padding: 10

  
  
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

  img:{
      height:20,
      width:20
  },

  buttonUpdate:{
    borderRadius: 50,
    
   
    width: 97,
    height: 35,
    paddingTop: 8,
    marginLeft: 20,
    marginTop: 16,
  
    
  },

  buttonComplaints:{
    borderRadius: 50,

   
    width: 80,
    height: 35,
    paddingTop: 8,
    marginLeft: 70,
    marginTop: 16,
  
    
  },

  buttonLog:{
    borderRadius: 50,
    padding: 5,
    
    width: 70,
    height: 35,
    paddingTop: 8,
    
    marginTop: 16,
  
  
  
    
  },

  
  buttonProfile:{
    borderRadius: 50,


    width: 50,
    height: 35,
    paddingTop: 8,
    
    marginTop: 16,
    marginLeft:5

  },
})
  