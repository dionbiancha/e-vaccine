import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import seringa from '../images/seringa.png';
import loadAnim from '../lottie/loadAnim.json';

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
  background-color:rgba(0, 0, 0, 0.7);
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
        animationType="slide"
        transparent={true}
        visible={load}
      >
        <PageModal>
          <LottieView style={{width: 300}} source={loadAnim} autoPlay loop />
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