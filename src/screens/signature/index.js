import React, { useRef, useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import SignatureCanvas from 'react-native-signature-canvas';
import { SignatureContext } from "../../components/signatureContext";

export default function Signature() {
  const navi = useNavigation();
  const signatureRef = useRef(null);
  const [ signature, setSignature ] = useState(null);
 
  console.log('signatureRef', signatureRef)

  const handleSave = () => {
    if (signatureRef.current){
      setSignature(signatureRef.current);
    }
    console.log(signatureRef)
    //navi.navigate('entry');
  };
  
  return (
    <SignatureContext.Provider value={{ signature, setSignature }}>
      <SignatureCanvas
        ref={signatureRef}
        onOK={handleSave}
        descriptionText={'Assine acima'}
        clearText={'Limpar'}
        confirmText={'Salvar'}
      />      
    </SignatureContext.Provider>
  );
}