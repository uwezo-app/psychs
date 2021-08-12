import { StyleSheet } from "react-native";


const styles= StyleSheet.create({
  container: {
    flex: 1,
    marginTop:0,
    padding:10,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#12AD2B',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 1,
    paddingLeft: 0,
  },
  action1: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 1,
    paddingLeft: 0,
  },
  action2: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 1,
    paddingLeft: 0,
  },
  forgot:{
    marginLeft:'2%'
  },
  actionError: {  
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    borderRadius:1
  },
  logo:{
    width: 100,
    height: 100,
    marginLeft: '36%',
    marginTop: '10%'
  },
 
});
export default styles;