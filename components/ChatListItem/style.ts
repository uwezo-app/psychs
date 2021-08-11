import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        width:"100%",
        justifyContent:"space-between",
        padding:10,
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
    lastmessage:{
        fontSize:16,
        color:'grey'
        
    },
    time:{
        fontSize:14,
        color:'grey'
    }

});
export default styles;