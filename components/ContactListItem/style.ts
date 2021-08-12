import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        width:"100%",
        justifyContent:"space-between",
        padding:10,
        alignSelf: 'flex-end',
        right: 0,
    },
    leftContainer:{
        flexDirection:'row'
    },

    midContainer:{
      justifyContent:'space-around'  
    },
    
    avatar:{
        width:60,
        height:60,
        marginRight:15,
        borderRadius:51,
    },
    username:{
        fontSize:16,
        fontWeight:'bold',
    },
    
    acceptButton: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#12AD2B',
        alignItems: 'center',
        marginTop: 10,
        height:30,
        alignSelf: 'flex-end',
      
        
      },
      acceptButton1: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#D2042D',
        alignItems: 'center',
        marginTop: 10,
        height:30,
      },
      panelButtonTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        textAlignVertical:'center',
      },
      buttonContainer:{
          flexDirection:'row',
          justifyContent: 'space-between',
          alignItems:'flex-end',
          alignSelf:'flex-end'
      }

});
export default styles;