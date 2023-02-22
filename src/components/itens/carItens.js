import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Switch } from 'react-native-paper';



export default function CarItens() {

  const [isCrlv, setCrlv] = useState(false);
  const [isOriginalKey, setOriginalKey] = useState(false);
  const [isExtraKey, setExtraKey] = useState(false);
  const [isManual, setManual] = useState(false);
  const [isCarn, setCarn] = useState(false);
  const [isAntena, setAntena] = useState(false);
  const [isAlarme, setAlarme] = useState(false);
  const [isControlAlarme, setControlAlarme] = useState(false);
  const [isRadio, setRadio] = useState(false);
  const [isCd, setCd] = useState(false);
  const [isDvd, setDvd] = useState(false);
  const [isFrenteSom, setFrenteSom] = useState(false);
  const [isBack, setBack] = useState(false);
  const [isTapete, setTapete] = useState(false);
  const [isAr, setAr] = useState(false);
  const [isExtintor, setExtintor] = useState(false);
  const [isBateria, setBateria] = useState(false);
  const [isFrisos, setFrisos] = useState(false);
  const [isMacaco, setMacaco] = useState(false);
  const [isChaveRoda, setChaveRoda] = useState(false);
  const [isTri, setTri] = useState(false);
  const [isVeiculoSujo, setVeiculoSujo] = useState(false);

  const clrv = () => setCrlv(!isCrlv);
  const originalKey = () => setOriginalKey(!isOriginalKey);
  const extralKey = () => setExtraKey(!isExtraKey);
  const manual = () => setManual(!isManual);
  const carn = () => setCarn(!isCarn);
  const antena = () => setAntena(!isAntena);
  const alarm = () => setAlarme(!isAlarme);
  const controlAlarme = () => setControlAlarme(!isControlAlarme);
  const radio = () => setRadio(!isRadio);
  const cd = () => setCd(!isCd);
  const dvd = () => setDvd(!isDvd);
  const frenteSom = () => setFrenteSom(!isFrenteSom);
  const back = () => setBack(!isBack);
  const tapete = () => setTapete(!isTapete);
  const arcondicionado = () => setAr(!isAr);
  const extintor = () => setExtintor(!isExtintor);
  const bateria = () => setBateria(!isBateria);
  const frisos = () => setFrisos(!isFrisos);
  const macaco = () => setMacaco(!isMacaco);
  const chaveRoda = () => setChaveRoda(!isChaveRoda);
  const triangulo = () => setTri(!isTri);
  const veiculosujo = () => setVeiculoSujo(!isVeiculoSujo);

  return (
    <View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isCrlv} onValueChange={clrv} />
        <Text> Documento Crlv - Ex: </Text>
        <TextInput style={{marginLeft: 2, borderBottomWidth: 1, borderColor: 'black', paddingLeft: 2, height: 15, borderRadius: 3, width: 150 }}/>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isOriginalKey} onValueChange={originalKey} />
        <Text> Chave Original </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isExtraKey} onValueChange={extralKey} />
        <Text> Chave Reserva </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isManual} onValueChange={manual} />
        <Text> Manual de uso / Manutenção </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isCarn} onValueChange={carn} />
        <Text> Carnê de Garantia </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isAntena} onValueChange={antena} />
        <Text> Antena </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isAlarme} onValueChange={alarm} />
        <Text> Alarme de Segurança </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isControlAlarme} onValueChange={controlAlarme} />
        <Text> Controle do Alarme </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isRadio} onValueChange={radio} />
        <Text> Radio AM/FM  </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isCd} onValueChange={cd} />
        <Text> Cd - Player </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isDvd} onValueChange={dvd} />
        <Text> Dvd - Player  </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isFrenteSom} onValueChange={frenteSom} />
        <Text> Frente do Aparelho de Som  </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isBack} onValueChange={back} />
        <Text> Acendedor de cigarros  </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isTapete} onValueChange={tapete} />
        <Text> Tapete de borracha </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isAr} onValueChange={arcondicionado} />
        <Text> Ar condicionado </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isExtintor} onValueChange={extintor} />
        <Text> Extintor de Incêndio </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isBateria} onValueChange={bateria} />
        <Text> Bateria - Modelo </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isFrisos} onValueChange={frisos} />
        <Text> Frisos Laterais Teto </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isMacaco} onValueChange={macaco} />
        <Text> Macaco </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isChaveRoda} onValueChange={chaveRoda} />
        <Text> Chave de Roda </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isTri} onValueChange={triangulo} />
        <Text> Triângulo </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Switch value={isVeiculoSujo} onValueChange={veiculosujo} />
        <Text> Veículo Sujo </Text>
      </View>
    </View>
  )
}