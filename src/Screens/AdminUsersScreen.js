import React,  {useEffect, useState} from "react";
import { Button, Modal, list, Text, View, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import { viewUser } from "../Services/user.service";


const AdminUsersScreen = (props) => {


  const [apiData, setApiData] = useState([]);
  useEffect(() => {
      viewUser()
          .then((getData) => {
              setApiData(getData.data);
          })
  }, [])


  const getData = () => {
    viewUser()
    .then((getData) => {
            setApiData(getData.data);
        })
}

const getList= () => {
 
  fetch("http://localhost:3000/user",{
     
      method : "GET"
  }).then(res=>{
      return res.json()
  }).then(res=>{
      alert(res.list.length)
  })
}


const userArray = [];

  return (

    

       <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <View style={styles.sideways}>
        <Text style={styles.homeText}>Users</Text>


   
       

        <TouchableOpacity onPress={() => {
            props.navigation.navigate("AdminComplaints");
          }}>
       
            <View style={styles.buttonComplaints}>
                <Text style={styles.buttonText}>Complaints</Text>
               
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




        



   



       {/* <ScrollView>

        
                {list.map((user)=>{
                    return(
                        
                            <View>
                                <Text>{user.name}</Text>
                                <Text>{user.email}</Text>
                                <Text>{user.phone}</Text>
                               
                        </View>
                    )
                })}
            </ScrollView>  */}
{/* 
            <View>

              
            userArray = viewUser();

            <Text>
              {userArray[0].name}
            </Text>

            </View> */}


            <View>


            {apiData.map((data) => {
                        return (
                          <View>
                            
                                <Text>{data.id}</Text>
                                <Text>{data.name}</Text>
                                <Text>{data.email}</Text>
                               </View>
                                    
                        )
                    })}


        </View>



           

            
         




       





           


        <ScrollView>

        <View style={styles.complaints}>
                  

            <View style={styles.historyButton}>

                  <View style={styles.history}>
                 
                      <Text style={styles.textBold}>User ID: #46</Text>
                      <Text>Name: Syed Muhammad Zarif</Text>
                      <Text>Address: 24/E, East Rampura, Dhaka</Text>
                    
                      <Text>Phone: 01731276523</Text>
                      <Text>Email: syedzarif@gmail.com</Text>
                      
                     


                  </View>


                  <TouchableOpacity onPress={() => {
                  props.navigation.navigate("AdminProfile");
                 }}>
       
            <View style={styles.button3}>
                <Text style={styles.buttonText}>Contact</Text>
               
            </View>


        </TouchableOpacity>

            </View>
















            <View style={styles.historyButton}>

                  <View style={styles.history}>
                 
                      <Text style={styles.textBold}>User ID: #46</Text>
                      <Text>Name: Syed Muhammad Zarif</Text>
                      <Text>Address: 24/E, East Rampura, Dhaka</Text>
                    
                      <Text>Phone: 01731276523</Text>
                      <Text>Email: syedzarif@gmail.com</Text>
                      
                     


                  </View>


                  <TouchableOpacity onPress={() => {
                  props.navigation.navigate("View");
                 }}>
       
            <View style={styles.button3}>
                <Text style={styles.buttonText}>Contact</Text>
               
            </View>


        </TouchableOpacity>

            </View>
















            <View style={styles.historyButton}>

<View style={styles.history}>

    <Text style={styles.textBold}>User ID: #46</Text>
    <Text>Name: Syed Muhammad Zarif</Text>
    <Text>Address: 24/E, East Rampura, Dhaka</Text>
    
    <Text>Phone: 01731276523</Text>
    <Text>Email: syedzarif@gmail.com</Text>
    
   


</View>


<TouchableOpacity onPress={() => {
props.navigation.navigate("View");
}}>

<View style={styles.button3}>
<Text style={styles.buttonText}>Contact</Text>

</View>


</TouchableOpacity>

</View>











<View style={styles.historyButton}>

                  <View style={styles.history}>
                 
                      <Text style={styles.textBold}>User ID: #46</Text>
                      <Text>Name: Syed Muhammad Zarif</Text>
                      <Text>Address: 24/E, East Rampura, Dhaka</Text>
                    
                      <Text>Phone: 01731276523</Text>
                      <Text>Email: syedzarif@gmail.com</Text>
                      
                     


                  </View>


                  <TouchableOpacity onPress={() => {
                  props.navigation.navigate("View");
                 }}>
       
            <View style={styles.button3}>
                <Text style={styles.buttonText}>Contact</Text>
               
            </View>


        </TouchableOpacity>

            </View>















            <View style={styles.historyButton}>

<View style={styles.history}>

    <Text style={styles.textBold}>User ID: #46</Text>
    <Text>Name: Syed Muhammad Zarif</Text>
    <Text>Address: 24/E, East Rampura, Dhaka</Text>
   
    <Text>Phone: 01731276523</Text>
    <Text>Email: syedzarif@gmail.com</Text>
    
   


</View>


<TouchableOpacity onPress={() => {
props.navigation.navigate("View");
}}>

<View style={styles.button3}>
<Text style={styles.buttonText}>Contact</Text>

</View>


</TouchableOpacity>

</View>














<View style={styles.historyButton}>

                  <View style={styles.history}>
                 
                      <Text style={styles.textBold}>User ID: #46</Text>
                      <Text>Name: Syed Muhammad Zarif</Text>
                      <Text>Address: 24/E, East Rampura, Dhaka</Text>
                     
                      <Text>Phone: 01731276523</Text>
                      <Text>Email: syedzarif@gmail.com</Text>
                      
                     


                  </View>


                  <TouchableOpacity onPress={() => {
                  props.navigation.navigate("View");
                 }}>
       
            <View style={styles.button3}>
                <Text style={styles.buttonText}>Contact</Text>
               
            </View>


        </TouchableOpacity>

            </View>
















           

                  

           
                  

        </View>

        </ScrollView>

    </SafeAreaView>
  );
};

export default AdminUsersScreen;


const styles = StyleSheet.create({

    textBold:{
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
      width: 90,
      height: 45,
      marginLeft:27,
      
    
        
        
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
    marginLeft: 90,
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
  