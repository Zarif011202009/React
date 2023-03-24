import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import ProductCard from "../Components/ProductCard";
import { Text, Form, TouchableOpacity, View, Input, StyleSheet, Flatlist, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SelectList } from "react-native-dropdown-select-list";




const CrimeReportScreen = (props) => {
    const [selected, setSelected] = React.useState("");

    const categories = [
        {key:'1', value:'Accident'},
        {key:'2', value:'Kidnapping'},
        {key:'3', value:'Robbery'},
        {key:'4', value:'Armed Robbery'},
        {key:'5', value:'Harassment'},
        {key:'6', value:'Threat'},
        {key:'7', value:'Theft'},
        {key:'8', value:'Self Harm'},
        {key:'9', value:'Fire'},
        {key:'10', value:'Other'},

    ];

    const involved = [
        {key:'1', value:'Yes, I am the only victim.'},
        {key:'2', value:'Yes, I am one of the victims.'},
        {key:'3', value:'No, but the victim(s) is/are still in the scene.'},
        {key:'4', value:'No, but the victim(s) is/are no longer in the scene.'}

    ];

    const injured = [
        {key:'1', value:'No one is injured'},
        {key:'2', value:'The victim(s) has/have suffered only minor injuries'},
        {key:'3', value:'The victim(s) has/have suffered severe injuries and require immediate medical assistance'},
        {key:'4', value:'The victim(s) is/are unconscious'},
        {key:'5', value:'The victim(s) has/have passed away'}

    ];

    const perpetrator = [
        {key:'1', value:'Yes, the perpetrator(s) is/are still present on scene'},
        {key:'2', value:'No, the perpetrator(s) is/are are no longer present on scene'},
       

    ];

    const assistance = [
        {key:'1', value:'Police and ambulance'},
        {key:'2', value:'Police'},
        {key:'3', value:'Ambulance'},
        {key:'4', value:'Fire Department'},
       

    ];

    const location = [
        {key:'1', value:'Rampura'},
        {key:'2', value:'Tejgaon'},
        {key:'3', value:'Gulisthan'},
        {key:'4', value:'Niketon'},
        {key:'5', value:'Uttara'},
        {key:'6', value:'Khilgaon'},
        {key:'7', value:'Mirpur'},
        {key:'8', value:'Elephant Road'},
        {key:'9', value:'Farmgate'},
    ];

    const priority = [
        {key:'1', value:'1'},
        {key:'2', value:'2'},
        {key:'3', value:'3'},
        {key:'4', value:'4'},
        {key:'5', value:'5'},
    ];

    
  return (

    <ScrollView>
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
        <Text style={styles.questions}>1. What is the category of the crime/incident?</Text>
          
           
            <SelectList 
            data={categories} setSelected={setSelected} 
            boxStyles={{marginLeft: 10, marginRight:10,  borderRadius:4}}
            placeholder="Please select your answer"
            //dropdownItemStyles={{marginHorizontal:10}}
            maxHeight={200}
            dropdownStyles={{margin:10, borderRadius:4}}
           
            >
                
             
              
               
            </SelectList>
        </View>





        <View style={styles.bg}>
        <Text style={styles.questions}>2. Are you the person involved?</Text>
          
           
            <SelectList 
            data={involved} setSelected={setSelected} 
            boxStyles={{marginLeft: 10, marginRight:10,  borderRadius:4}}
            placeholder="Please select your answer"
            //dropdownItemStyles={{borderColor:"black", borderWidth: 0.5, borderRadius: 10, marginBottom: 2}}
            maxHeight={200}
            dropdownStyles={{margin:10,  borderRadius:4}}
           
            >
                
             
              
               
            </SelectList>
        </View>




        <View style={styles.bg}>
        <Text style={styles.questions}>3. What is the current condition of the victim(s)?</Text>
          
           
            <SelectList 
            data={injured} setSelected={setSelected} 
            boxStyles={{marginLeft: 10, marginRight:10, borderRadius:4}}
            placeholder="Please select your answer"
            //dropdownItemStyles={{borderColor:"black", borderWidth: 0.5, borderRadius: 10, marginBottom: 2}}
            maxHeight={200}
            dropdownStyles={{margin:10,  borderRadius:4}}
           
            >
                
             
              
               
            </SelectList>
        </View>





        <View style={styles.bg}>
        <Text style={styles.questions}>4. Is/are the perpetrator(s) still present on scene?</Text>
          
           
            <SelectList 
            data={perpetrator} setSelected={setSelected} 
            boxStyles={{marginLeft: 10, marginRight:10,  borderRadius:4}}
            placeholder="Please select your answer"
            //dropdownItemStyles={{borderColor:"black", borderWidth: 0.5, borderRadius: 10, marginBottom: 2}}
            maxHeight={200}
            dropdownStyles={{margin:10,  borderRadius:4}}
           
            >
                
             
              
               
            </SelectList>
        </View>
        



        <View style={styles.bg}>
        <Text style={styles.questions}>5. What type of assistance do you reqiure?</Text>
          
           
            <SelectList 
            data={assistance} setSelected={setSelected} 
            boxStyles={{marginLeft: 10, marginRight:10,  borderRadius:4}}
            placeholder="Please select your answer"
            //dropdownItemStyles={{borderColor:"black", borderWidth: 0.5, borderRadius: 10, marginBottom: 2}}
            maxHeight={200}
            dropdownStyles={{margin:10,  borderRadius:4}}
           
            >
                
             
              
               
            </SelectList>
        </View>





        <View style={styles.bg}>
        <Text style={styles.questions}>6. What is your current location?</Text>
          
           
            <SelectList 
            data={location} setSelected={setSelected} 
            boxStyles={{marginLeft: 10, marginRight:10,  borderRadius:4}}
            placeholder="Please select your answer"
            //dropdownItemStyles={{borderColor:"black", borderWidth: 0.5, borderRadius: 10, marginBottom: 2}}
            maxHeight={200}
            dropdownStyles={{margin:10,  borderRadius:4}}
           
            >
                
             
              
               
            </SelectList>
        </View>



        




        <View style={styles.bg}>
        <Text style={styles.questions}>8. What would you rate the priority of the situation? (1 being the lowest priority and 5 being the highest priority)</Text>
          
           
            <SelectList 
            data={priority} setSelected={setSelected} 
            boxStyles={{marginLeft: 10, marginRight:10, borderRadius:4}}
            placeholder="Please select your answer"
            //dropdownItemStyles={{borderColor:"black", borderWidth: 0.5}}
            maxHeight={200}
            dropdownStyles={{margin:10, borderRadius:4}}
           
            >
                
             
              
               
            </SelectList>
        </View>





       
             
              
        <View style={styles.bg}>
        <Text style={styles.questions}>7. Add a photo of the perpetrator/scene</Text>
          
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Camera");
          }}>
       
            <View style={styles.buttonForgot}>
                <Text style={styles.buttonTextForgot}>Click to open the camera app</Text>
               
            </View>

        
           
            

        </TouchableOpacity>
            
        </View>





        <View>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("Profile");
             }}>
       
            <View style={styles.button2}>
                <Text style={styles.buttonText}>Report</Text>
               
        </View>

        
           
            

        </TouchableOpacity>
     </View>
          


        
        


    </SafeAreaView>

    </ScrollView>
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

    drop:{
        margin: 10,
        
        
        
        
    },

    questions:{
        margin: 10
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
        //borderWidth: 1,
       // marginBottom: 10
        
      },
      button2:{
        borderRadius: 4,
        margin: 10,
        padding: 12,
        backgroundColor: "#3498DB",
        width: 100,
        height: 45,
        marginLeft: 295,
        marginBottom:15
      
        
       
        
        
        
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

    },

    buttonForgot:{
        marginLeft: 10
    },
    
    
    })
