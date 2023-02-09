//importations
import { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import styles from './style';


export default function Entry(){

  //UseStates on the app
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  //UseEffect to get the exact date
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    if (month < 10) month = '0' + month;
    if (date < 10) date = '0' + date;
    setCurrentDate(
      date + '/' + month + '/' + year
    );
  }, []); 

  //UseEffect to get the exact time
  useEffect(() => {
    var hour = new Date().getHours();
    var min = new Date().getMinutes();

    if (hour < 10) hour = '0' + hour;
    if (min < 10) min = '0' + min;
    setCurrentTime(
      hour + ':' + min
    );
  }, []);

  return(
    <View style={styles.container}>
      {/* View of Timestamp, shows the exactly time that the button was clicked */}
      <View style={styles.timestamp}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>Entrada</Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={styles.timeun}> {currentDate} </Text>
          <Text style={styles.timeun}> {currentTime} </Text>
        </View>
      </View>
      {/* View of title */}
      <View>
        <Text style={styles.subtitle}>Checklist de Entrada</Text>
      </View>
      {/* This view is about the costumer, informations about it */}
      <View style={styles.checkEntry}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{flex: 8}}>Cliente:</Text>
          <Text style={{flex: 4}}>CPF:</Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <TextInput style={{marginRight: 10, borderWidth: 1, borderColor: 'black', flex: 8, paddingLeft: 2, height: 20, borderRadius: 3}}/>
          <TextInput style={{borderWidth: 1, borderColor: 'black', flex: 4, paddingLeft: 2, height: 20, borderRadius: 3}} keyboardType='number-pad'/>          
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{marginRight: 10, flex: 1}}>CEP:</Text>
          <Text style={{flex: 1}}>Trab.:</Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <TextInput style={{marginRight: 10, borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 20, borderRadius: 3}}/>
          <TextInput style={{borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 20, borderRadius: 3}}/>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{flex: 9}}>Endereço:</Text>         
          <Text style={{flex: 2}}>Nº.:</Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <TextInput style={{marginRight: 10, borderWidth: 1, borderColor: 'black', flex: 9, paddingLeft: 2, height: 20, borderRadius: 3}}/>          
          <TextInput style={{borderWidth: 1, borderColor: 'black', flex: 2, paddingLeft: 2, height: 20, borderRadius: 3}} keyboardType='number-pad'/>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{marginRight: 10, flex: 1}}>Comp.:</Text>
          <Text style={{flex: 1}}>Bairro:</Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <TextInput style={{marginRight: 10, borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 20, borderRadius: 3}}/>
          <TextInput style={{borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 20, borderRadius: 3}}/>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{marginRight: 10, flex: 1}}>Tel.:</Text>
          <Text style={{flex: 1}}>Cel.:</Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <TextInput style={{marginRight: 10, borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 20, borderRadius: 3}} keyboardType='number-pad'/>
          <TextInput style={{borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 20, borderRadius: 3}} keyboardType='number-pad'/>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{marginRight: 10, flex: 1}}>Outros:</Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <TextInput style={{borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 60, borderRadius: 3, textAlignVertical: "top"}} multiline={true} />  
        </View>
      </View>
    </View>
  )
}