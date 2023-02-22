import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#6599EE',
    alignItems: 'center',   
  },
  
  background:{
    position:'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:'100%'
  },

  timestamp: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 15,
    width: 300,
    padding: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  checkEntry: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 340,
    padding: 10,
    marginBottom: 10,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  subtitle: {
    marginTop: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },

  timeun: {
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 30,
    marginLeft: 10
  },

});