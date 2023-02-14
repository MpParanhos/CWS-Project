//importations
import { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, SafeAreaView } from "react-native";
import { RadioButton } from "react-native-paper";
import styles from './style';


export default function Entry(){

  //UseStates on the app
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [checked, setChecked] = useState('');

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
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
        <View style={{alignItems:'center'}}>
          <Text style={styles.subtitle}>Checklist de Entrada</Text>
        </View>
        {/* This view is about the costumer, informations about it */}
        <View style={styles.checkEntry}>
          <View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <RadioButton
                value="Particular"
                status={checked === 'Particular' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Particular')}
              />
              <Text> Particular </Text>        
              <RadioButton
                value="Terceiro"
                status={checked === 'Terceiro' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Terceiro')}
              />
              <Text> Terceiro </Text>
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <RadioButton
                value="Segurado"
                status={checked === 'Segurado' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Segurado')}
              />
              <Text> Segurado </Text>
              <RadioButton
                value="Locadora"
                status={checked === 'Locadora' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Locadora')}
              />
              <Text> Locadora </Text>
            </View> 
            <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text>Nome:</Text>
              <TextInput style={{marginLeft: 2, borderWidth: 1, borderColor: 'black', paddingLeft: 2, height: 15, borderRadius: 3, width: 150, fontSize: 10}}/>
            </View>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 15}}>
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
            <TextInput style={{borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 60, borderRadius: 3, textAlignVertical: "top", marginBottom: 10}} multiline={true} />  
          </View>
        </View>
        {/* This view is about the car, informations about it */}
        <View style={styles.checkEntry}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{marginRight: 10, flex: 1}}>Placa:</Text>
            <Text style={{flex: 1}}>Modelo:</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <TextInput style={{marginRight: 10, borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 20, borderRadius: 3}}/>
            <TextInput style={{borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 20, borderRadius: 3}}/>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text>Descrição do modelo:</Text>         
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <TextInput style={{ borderWidth: 1, borderColor: 'black', flex: 9, paddingLeft: 2, height: 20, borderRadius: 3}}/>          
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{marginRight: 10, flex: 1}}>Cor:</Text>
            <Text style={{flex: 1}}>KM:</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <TextInput style={{marginRight: 10, borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 20, borderRadius: 3}}/>
            <TextInput style={{borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 20, borderRadius: 3}} keyboardType='number-pad'/>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{marginRight: 10, flex: 1}}>Chassi:</Text>
            <Text style={{flex: 1}}>Número do sinistro:</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <TextInput style={{marginRight: 10, borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 20, borderRadius: 3}}/>
            <TextInput style={{borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 20, borderRadius: 3}} keyboardType='number-pad'/>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text>Ano/mod:</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TextInput style={{borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, height: 20, borderRadius: 3, width: 100, textAlign:'center'}}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}