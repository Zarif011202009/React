import React, {useEffect, useState} from "react";
import { Button, Text, View, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import ProductCard from "../Components/ProductCard";
import axios from "axios";


const AdminComplaintsScreen = (props) => {

  useEffect(()=>{
    getList()
},[])

const getList= () => {
  
  fetch("http://localhost:3000/product",{
      
      method : "GET"
  }).then(res=>{
      return res.json()
  }).then(res=>{
      alert(res.list.length)
  })
}


const handelDetete = (product) =>{
  axios({
      url:"http://localhost:3000/product/",
      method : "DELETE",
      data : {
          id : product.id
      }
  }).then((res)=>{
      getList();
  })
}


  return (

       <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <View style={styles.sideways}>
        <Text style={styles.homeText}>Complaints</Text>


        <TouchableOpacity onPress={() => {
            props.navigation.navigate("AdminUsers");
          }}>
       
            <View style={styles.buttonUsers}>
                <Text style={styles.buttonText}>Users</Text>
               
            </View>

         
            

        </TouchableOpacity>
       


        <TouchableOpacity onPress={() => {
            props.navigation.navigate("AdminProfile");
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
                  

            <View style={styles.historyButton}>

                  <View style={styles.history}>
                 
                      <Text style={styles.boldText}>Complaint ID: #23</Text>
                      <Text style={styles.boldText}>Date: 29/05/22 04:23 PM</Text>

                      <Text style={styles.boldText}>1. What is the category of the crime/incident?</Text>
                      <Text>-> Armed Robbery</Text>

                      <Text style={styles.boldText}>2. Are you the person involved?</Text>
                      <Text>-> Yes, I am the only victim.</Text>

                      <Text style={styles.boldText}>3. What is the current condition of the victim(s)?</Text>
                      <Text>-> The victim(s) is/are unconscious</Text>

                      <Text style={styles.boldText}>4. Is/are the perpetrator(s) still present on scene?</Text>
                      <Text>-> No, the perpetrator(s) is/are are no longer present on scene.</Text>

                      <Text style={styles.boldText}>5. What type of assistance do you reqiure?</Text>
                      <Text>-> Police</Text>

                      <Text style={styles.boldText}>6. What is your current location?</Text>
                      <Text>-> Rampura</Text>

                      <Text style={styles.boldText}>7. What would you rate the priority of the situation? (1 being the lowest priority and 5 being the highest priority)</Text>
                      <Text>-> 4</Text>

                      <Text style={styles.boldText}>8. Photo of the perpetrator/scene</Text>
                      <Text>-> N/A</Text>

                      <View style={styles.buttonRow}>




<View>
            <TouchableOpacity onPress={() => {
              handelDetete(product);
                props.navigation.navigate("AdminProfile");
             }}>
       
            <View style={styles.button2}>
                <Text style={styles.buttonText}>Delete</Text>
               
        </View>

        
           
            

        </TouchableOpacity>
     </View>





     <View>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("AdminProfile");
             }}>
       
            <View style={styles.button3}>
                <Text style={styles.buttonText}>Forward</Text>
               
        </View>

        
           
            

        </TouchableOpacity>
     </View>

                

                    
</View>


                      
                     


                  </View>


</View>




<View style={styles.historyButton}>

                  <View style={styles.history}>
                 
                      <Text style={styles.boldText}>Complaint ID: #23</Text>
                      <Text style={styles.boldText}>Date: 29/05/22 04:23 PM</Text>

                      <Text style={styles.boldText}>1. What is the category of the crime/incident?</Text>
                      <Text>-> Armed Robbery</Text>

                      <Text style={styles.boldText}>2. Are you the person involved?</Text>
                      <Text>-> Yes, I am the only victim.</Text>

                      <Text style={styles.boldText}>3. What is the current condition of the victim(s)?</Text>
                      <Text>-> The victim(s) is/are unconscious</Text>

                      <Text style={styles.boldText}>4. Is/are the perpetrator(s) still present on scene?</Text>
                      <Text>-> No, the perpetrator(s) is/are are no longer present on scene.</Text>

                      <Text style={styles.boldText}>5. What type of assistance do you reqiure?</Text>
                      <Text>-> Police</Text>

                      <Text style={styles.boldText}>6. What is your current location?</Text>
                      <Text>-> Rampura</Text>

                      <Text style={styles.boldText}>7. What would you rate the priority of the situation? (1 being the lowest priority and 5 being the highest priority)</Text>
                      <Text>-> 4</Text>

                      <Text style={styles.boldText}>8. Photo of the perpetrator/scene</Text>
                      <Text>-> N/A</Text>
                      
                     
<View style={styles.buttonRow}>




<View>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("AdminProfile");
             }}>
       
            <View style={styles.button2}>
                <Text style={styles.buttonText}>Delete</Text>
               
        </View>

        
           
            

        </TouchableOpacity>
     </View>





     <View>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("AdminProfile");
             }}>
       
            <View style={styles.button3}>
                <Text style={styles.buttonText}>Forward</Text>
               
        </View>

        
           
            

        </TouchableOpacity>
     </View>

                

                    
</View>



</View>


              


</View>















<View style={styles.historyButton}>

                  <View style={styles.history}>
                 
                      <Text style={styles.boldText}>Complaint ID: #23</Text>
                      <Text style={styles.boldText}>Date: 29/05/22 04:23 PM</Text>

                      <Text style={styles.boldText}>1. What is the category of the crime/incident?</Text>
                      <Text>-> Armed Robbery</Text>

                      <Text style={styles.boldText}>2. Are you the person involved?</Text>
                      <Text>-> Yes, I am the only victim.</Text>

                      <Text style={styles.boldText}>3. What is the current condition of the victim(s)?</Text>
                      <Text>-> The victim(s) is/are unconscious</Text>

                      <Text style={styles.boldText}>4. Is/are the perpetrator(s) still present on scene?</Text>
                      <Text>-> No, the perpetrator(s) is/are are no longer present on scene.</Text>

                      <Text style={styles.boldText}>5. What type of assistance do you reqiure?</Text>
                      <Text>-> Police</Text>

                      <Text style={styles.boldText}>6. What is your current location?</Text>
                      <Text>-> Rampura</Text>

                      <Text style={styles.boldText}>7. What would you rate the priority of the situation? (1 being the lowest priority and 5 being the highest priority)</Text>
                      <Text>-> 4</Text>

                      <Text style={styles.boldText}>8. Photo of the perpetrator/scene</Text>
                      <Text>-> N/A</Text>
                      
                     
<View style={styles.buttonRow}>




<View>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("AdminProfile");
             }}>
       
            <View style={styles.button2}>
                <Text style={styles.buttonText}>Delete</Text>
               
        </View>

        
           
            

        </TouchableOpacity>
     </View>





     <View>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("AdminProfile");
             }}>
       
            <View style={styles.button3}>
                <Text style={styles.buttonText}>Forward</Text>
               
        </View>

        
           
            

        </TouchableOpacity>
     </View>

                

                    
</View>



</View>


              


</View>










     

        </View>

        </ScrollView>

    </SafeAreaView>
  );
};

export default AdminComplaintsScreen;


const styles = StyleSheet.create({

    boldText:{
        fontWeight:"bold"
    },


  historyButton:{
    flexDirection:"row",
    borderWidth:0.5,
    marginTop:10,
    padding:10
  },


  history:{
    
      
      
  },

  complaints:{
      marginLeft:10,
      marginRight:10,
      padding:10,
      borderWidth:0,

  },

  nameText:{
      fontSize:16,
      fontWeight:"bold"
  },

  buttonRow:{
        flexDirection:"row"
  },

  button2:{
    borderRadius: 4,
    
    padding: 12,
    backgroundColor: "#3498DB",
    width: 100,
    height: 45,
    marginLeft:140,
    marginTop:10
  
      
      
    },

    button3:{
      borderRadius: 4,
      
      padding: 12,
      backgroundColor: "#3498DB",
      width: 100,
      height: 45,
      marginLeft:10,
      marginTop:10
    
        
        
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

  buttonUsers:{
    borderRadius: 50,

   
    width: 60,
    height: 35,
    paddingTop: 8,
    marginLeft: 20,
    marginTop: 16,
  
    
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
   

  },
})
  