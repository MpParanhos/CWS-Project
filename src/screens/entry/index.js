//importations
import React, { useContext } from 'react';
import { useState, useEffect, useRef } from "react";
import { View, Text, TextInput,  ScrollView, SafeAreaView, TouchableOpacity, Button, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import SelectDropdown from "react-native-select-dropdown";
import styles from './style';
import CarItens from "../../components/itens/carItens";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import { SignatureContext } from '../../components/signatureContext';

export default function Entry(){

  const navi = useNavigation();
  function goToSignature(){
    navi.navigate('signature');
}

  // const {signature} = useContext(SignatureContext);

  //UseStates on the app
  
  const [name, setName] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [checked, setChecked] = useState('');

  //Tires and fuel arrays
  const tiresBrand = ['Bridgestone', 'Continental', 'Firestone', 'Goodyear', 'Pirelli', 'Michellin', 'Outro']
  const tires = ['Ok', 'Desgaste Irregular', 'Desgaste Normal', 'Furado/Cortado', 'Bolha', 'Faltante']
  const fuel = ['Vazio', '1/4', '2/4', '3/4', '4/4']

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
      <LinearGradient 
        colors={['#6599ee', '#266cdd', '#c2c2c2']}
        style={styles.background}
      />
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
              <TextInput style={{marginLeft: 2, borderWidth: 1, borderColor: 'black', paddingLeft: 2, height: 15, borderRadius: 3, width: 150, fontSize: 10}} 
              onChangeText={setName}
              value={name} />
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
        {/* View of title */}
        <View style={{alignItems:'center'}}>
          <Text style={styles.subtitle}>Itens</Text>
        </View>
        {/* This view is about the itens that there is in the car */}
        <View style={styles.checkEntry}>
          <CarItens />
        </View>
        {/* View of title */}
        <View style={{alignItems:'center'}}>
          <Text style={styles.subtitle}>Detalhes</Text>
        </View>
        {/* This view is about the details of the car */}
        <View style={styles.checkEntry}>
          <Text>Imagens do carro</Text>
        </View>
        {/* View of title */}
        <View style={{alignItems:'center'}}>
          <Text style={styles.subtitle}>Pneus e combustível</Text>
        </View>
        {/* This view is about the tires of the car */}
        <View style={styles.checkEntry}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 15 }}>Pneu</Text>
            <Text style={{ flex: 2, fontWeight: 'bold', fontSize: 15, marginLeft: 10 }}>Marca</Text>
            <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 15, marginLeft: -15}}>Estado</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems:'center', alignContent:'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>DD</Text>
            <SelectDropdown
              data={tiresBrand}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText='Selecione a marca'
              buttonStyle={{borderRadius: 5, height: 20, width: 130, fontSize: 5}}
              buttonTextStyle={{fontSize: 11}}
              dropdownStyle={{borderRadius: 5 }}
              rowTextStyle={{fontSize: 10}}
            />
            <SelectDropdown
              data={tires}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText='Estado do pneu'
              buttonStyle={{borderRadius: 5, height: 20, width: 130, fontSize: 5}}
              buttonTextStyle={{fontSize: 11}}
              dropdownStyle={{borderRadius: 5 }}
              rowTextStyle={{fontSize: 10}}
            />
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems:'center', alignContent:'center', marginTop:5}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>DE</Text>
            <SelectDropdown
              data={tiresBrand}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText='Selecione a marca'
              buttonStyle={{borderRadius: 5, height: 20, width: 130, fontSize: 5}}
              buttonTextStyle={{fontSize: 11}}
              dropdownStyle={{borderRadius: 5 }}
              rowTextStyle={{fontSize: 10}}
            />
            <SelectDropdown
              data={tires}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText='Estado do pneu'
              buttonStyle={{borderRadius: 5, height: 20, width: 130, fontSize: 5}}
              buttonTextStyle={{fontSize: 11}}
              dropdownStyle={{borderRadius: 5 }}
              rowTextStyle={{fontSize: 10}}
            />
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems:'center', alignContent:'center', marginTop:5}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>TE</Text>
            <SelectDropdown
              data={tiresBrand}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText='Selecione a marca'
              buttonStyle={{borderRadius: 5, height: 20, width: 130, fontSize: 5}}
              buttonTextStyle={{fontSize: 11}}
              dropdownStyle={{borderRadius: 5 }}
              rowTextStyle={{fontSize: 10}}
            />
            <SelectDropdown
              data={tires}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText='Estado do pneu'
              buttonStyle={{borderRadius: 5, height: 20, width: 130, fontSize: 5}}
              buttonTextStyle={{fontSize: 11}}
              dropdownStyle={{borderRadius: 5 }}
              rowTextStyle={{fontSize: 10}}
            />
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems:'center', alignContent:'center', marginTop:5}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>TD</Text>
            <SelectDropdown
              data={tiresBrand}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText='Selecione a marca'
              buttonStyle={{borderRadius: 5, height: 20, width: 130, fontSize: 5}}
              buttonTextStyle={{fontSize: 11}}
              dropdownStyle={{borderRadius: 5 }}
              rowTextStyle={{fontSize: 10}}
            />
            <SelectDropdown
              data={tires}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText='Estado do pneu'
              buttonStyle={{borderRadius: 5, height: 20, width: 130, fontSize: 5}}
              buttonTextStyle={{fontSize: 11}}
              dropdownStyle={{borderRadius: 5 }}
              rowTextStyle={{fontSize: 10}}
            />
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems:'center', alignContent:'center', marginTop:5}}>
            <Text style={{fontSize: 15, fontWeight:'bold'}}>Estepe</Text>
            <SelectDropdown
              data={tiresBrand}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText='Selecione a marca'
              buttonStyle={{borderRadius: 5, height: 20, width: 130, fontSize: 5, marginRight: -20}}
              buttonTextStyle={{fontSize: 11}}
              dropdownStyle={{borderRadius: 5 }}
              rowTextStyle={{fontSize: 10}}
            />
            <SelectDropdown
              data={tires}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText='Estado do pneu'
              buttonStyle={{borderRadius: 5, height: 20, width: 130, fontSize: 5}}
              buttonTextStyle={{fontSize: 11}}
              dropdownStyle={{borderRadius: 5 }}
              rowTextStyle={{fontSize: 10}}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems:'center', alignContent:'center', justifyContent: 'center', marginTop:5}}>
            <Text style={{fontSize: 15, fontWeight:'bold', marginEnd: 5}}>Combustível</Text>
            <SelectDropdown
              data={fuel}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText='Quantidade'
              buttonStyle={{borderRadius: 5, height: 20, width: 130, fontSize: 5}}
              buttonTextStyle={{fontSize: 11}}
              dropdownStyle={{borderRadius: 5 }}
              rowTextStyle={{fontSize: 10}}
            />
          </View>          
        </View>
        <View style={styles.checkEntry}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 10, flex: 1, textAlign:'center', fontWeight: 'bold', fontSize: 20}}>Observações:</Text>
          </View>
          <View style={{ flexDirection: 'row'}}>
            <TextInput style={{borderWidth: 1, borderColor: 'black', flex: 1, paddingLeft: 2, minHeight: 60, borderRadius: 3, textAlignVertical: "top", marginBottom: 10}} multiline={true} />  
          </View>
        </View>
        <View style={{width: 340, padding: 10, marginBottom: 10, alignItems:'center'}}>          
          <Text style={{textAlign: 'justify'}}>
            Ao deixar seu carro na oficina, solicitamos que o mesmo esteja limpo para que tenhamos o 
            preenchimento do checklist e fotos mais próximo do real estado, a sujeira esconde pequenos 
            riscos dificultando assim identificarmos a sua origem, desta forma será utilizado o bom senso 
            para possíveis garantias, trabalhamos com prazos flutuantes de acordo com volume e dificuldade 
            de serviço, que será contado em dias úteis e passado após a chegada de todas as peças, pois 
            as mesmas são essenciais para o início dos reparos, sugerimos que as informações da situação 
            do seu veículo seja feita através de telefone a partir do 5º dia da entrada do veículo, 
            nossas informações são atualizadas toda semana, hoje estamos com média de:
          </Text>
          <TextInput style={{borderBottomWidth:1, borderColor:'black', height: 20, fontSize: 20, textAlign:'center', fontWeight:'bold', marginTop: -15}} keyboardType='number-pad'/>
          <Text style={{textAlign: 'justify'}}>
            dias úteis para reparo dos veículos em nossa oficina, para sua segurança as visitas para 
            acompanhamento dos reparos em seu veículo devem ser agendadas por email.
          </Text>
          <Text style={{fontSize:20, fontWeight:'bold'}}>orcamentoclassworkshop@gmail.com</Text>
        </View>  
        <View style={{width: 340, padding: 10, marginBottom: 10, alignItems:'center'}}> 
        {/*  {signature && <Image source={{ uri: signature }} style={styles.signatureImage} />} */}
          <TouchableOpacity style={styles.btn} onPress={ goToSignature }>
            <View style={styles.button}>
              <Text style={styles.textBtn}>Assinar</Text>
            </View>
          </TouchableOpacity>
          <Text>Responsável pelo recebimento</Text>
        </View>      
      </ScrollView>
    </SafeAreaView>
  )
}
