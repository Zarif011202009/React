import React from "react";
import { Button, Text, View, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import ProductCard from "../Components/ProductCard";


const AdminProfileScreen = (props) => {
  return (

       <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <View style={styles.sideways}>
        <Text style={styles.homeText}>Profile</Text>



        <TouchableOpacity onPress={() => {
            props.navigation.navigate("AdminUsers");
          }}>
       
            <View style={styles.buttonUsers}>
                <Text style={styles.buttonText}>Users</Text>
               
            </View>

         
            

        </TouchableOpacity>


        

        <TouchableOpacity onPress={() => {
            props.navigation.navigate("AdminComplaints");
          }}>
       
            <View style={styles.buttonComplaints}>
                <Text style={styles.buttonText}>Complaints</Text>
               
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




        <View style={styles.imgBox}>


           <View style={styles.imgSideways}>

            <Image source={require('../Components/imagesFile/img_avatar.png')} style={styles.imgStyle}></Image>

            <View style={styles.textProfile}>

            <Text style={styles.nameText}>Syed Zarif</Text>
            <Text>23/A, East Rampura, Dhaka</Text>
            <Text>syedzarif@gmail.com</Text>




        



            </View>




            





            </View>


            



</View>


<View style={styles.buttonBox1}>
    <View style={styles.textButtonSideways}>
        <View style={styles.column}>
    <Text>To see the full list of registered users</Text>
    <Text>Click here!</Text>
    </View>



    <TouchableOpacity onPress={() => {
                  props.navigation.navigate("AdminUsers");
                 }}>
       
            <View style={styles.button3}>
                <Text style={styles.buttonText}>Users</Text>
               
            </View>


        </TouchableOpacity>

        </View>

</View>




<View style={styles.buttonBox1}>
    <View style={styles.textButtonSideways}>
        <View style={styles.column}>
    <Text>To see the complaints from users</Text>
    <Text>Click here!</Text>
    </View>



    <TouchableOpacity onPress={() => {
                  props.navigation.navigate("AdminComplaints");
                 }}>
       
            <View style={styles.button4}>
                <Text style={styles.buttonText}>Complaints</Text>
               
            </View>


        </TouchableOpacity>

        </View>

</View>
            


      
    </SafeAreaView>
  );
};

export default AdminProfileScreen;


const styles = StyleSheet.create({

    column:{
            flexDirection:"column"
    },


    textButtonSideways:{
        flexDirection:"row"
    },

    buttonBox1:{
        margin:10,
        borderWidth:0.5,
        padding:10
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
        width: 110,
        height: 45,
        marginLeft:35,
      
    
        
        
      },
  
      button4:{
        borderRadius: 4,
        
        padding: 12,
        backgroundColor: "#3498DB",
        width: 110,
        height: 45,
        marginLeft:55,
        
      
          
          
        },


  imgBox:{
    margin:10,
    borderWidth:0.5,
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
    marginLeft: 80,
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

  buttonUsers:{
    borderRadius: 50,

   
    width: 60,
    height: 35,
    paddingTop: 8,
    marginLeft: 75,
    marginTop: 16,
  
    
  },

  buttonComplaints:{
    borderRadius: 50,

   
    width: 78,
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
})
  