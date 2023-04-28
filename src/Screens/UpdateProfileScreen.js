import React, {useEffect, useState} from "react";
import SafeAreaView from "react-native-safe-area-view";
import ProductCard from "../Components/ProductCard";
import { Text, Form, TouchableOpacity, View, Input, StyleSheet, Flatlist } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";


const UpdateProfileScreen = (props) => {


  useEffect(()=>{
    getList()
},[])


const getList= () => {
 
  fetch("http://localhost:3000/user",{
     
      method : "GET"
  }).then(res=>{
      return res.json()
  }).then(res=>{
      alert(res.list.length)
  })
}


  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [id,setId] = useState(null);


  const handleEdit = (currentUser) => {
    
    setId(currentUser.id)
    setName(currentUser.name+"")
    setEmail(currentUser.email+"")
    setPhone(currentUser.phone+"")
    
}

const onChangeName = (value) => {
  setName(value)
}

const onChangePhone = (value) => {
  setPhone(value)
}

const onChangeEmail = (value) => {
  setEmail(value)
}
  
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
    <View style={styles.sideways}>
    <Text style={styles.homeText}>Update</Text>


    <TouchableOpacity onPress={() => {
        props.navigation.navigate("Feed");
      }}>
   
        <View style={styles.buttonFeed}>
            <Text style={styles.buttonText}>Feed</Text>
           
        </View>

     
        

    </TouchableOpacity>
   

    <TouchableOpacity onPress={() => {
        props.navigation.navigate("Crime");
      }}>
   
        <View style={styles.buttonComplaints}>
            <Text style={styles.buttonText}>Complaint</Text>
           
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

     <View styles={styles.inputs}>
     <TextInput style = {styles.inputStyle} placeholder="Name" onChangeText={onChangeName}></TextInput>
     <TextInput style = {styles.inputStyle} placeholder="Address"></TextInput>
     <TextInput style = {styles.inputStyle} placeholder="Phone Number" onChangeText={onChangePhone}></TextInput>
     <TextInput style = {styles.inputStyle} placeholder="Email Address" onChangeText={onChangeEmail}></TextInput>
     <TextInput style = {styles.inputStyle} placeholder="Password"></TextInput>
     </View>

     <View>
     <TouchableOpacity onPress={() => {
            handleEdit();
            props.navigation.navigate("Profile");

          }}>
       
            <View style={styles.button2}>
                <Text style={styles.buttonText}>Update</Text>
               
            </View>

        
           
            

        </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
};

export default UpdateProfileScreen;

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
          margin:10,
          padding:10,
          borderWidth:1,
    
      },
    
      nameText:{
          fontSize:16,
          fontWeight:"bold"
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
    
    
      buttonFeed:{
    
         
    
       
        width: 40,
        height: 35,
        paddingTop: 8,
        marginLeft: 70,
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
        marginLeft: 10,
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
    
    
    })
