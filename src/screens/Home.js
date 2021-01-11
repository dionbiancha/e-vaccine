import React, { useState, useEffect } from 'react';
import { Image, 
  StyleSheet, 
  TouchableOpacity, 
  Modal,
  BackHandler, Alert 
  } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import seringa from '../images/seringa.png';
import modal from '../lottie/modal.json';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const PageModal = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center; 
  z-index: 90;
  background-color:#FFF;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  
`;

const SubTitle = styled.Text`
  text-align: center;
  margin: 10px;
  font-size: 15px;
  
`;

const Text = styled.Text`
  flex: 1;
  margin: 50px;
  text-align: center;
  font-size: 15px;
  
`;

const ButtomSerin = styled.Text`
  color: #7D8ABA;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 50px;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  
`;

export default () => {

  const [load, setLoad] = useState(false);

  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }

  const backAction = () => {
    Alert.alert("Hey!", "Tem certeza que deseja sair?", [
      {
        text: "NÃO",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Me tire daqui", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <>
      <Page>
        <Text>Conecte o cabo no celular e na entrada USB do seu corpo</Text>
        <TouchableOpacity onPress={()=>{
          setLoad(true);
          setTimeout(() => setLoad(false), 5000);
          }}>
          <ButtomSerin>VACINAR</ButtomSerin>
        </TouchableOpacity>
        <Image style={styles.seringa} source={seringa}/>
      </Page>
      <Modal
        animationType="fade"
        transparent={true}
        visible={load}
      >
        <PageModal>
          <Title>Vacina 404 not found</Title>
          <SubTitle>Continue seguindo as medidas de segurança recomendadas pela OMS.</SubTitle>
          <LottieView style={{width: 400}} source={modal} autoPlay loop />
        </PageModal>

      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  seringa: {
    width: 400,
    height: 400,
    marginBottom: -50
  }
});