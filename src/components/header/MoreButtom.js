import React, { useState } from 'react';
import { 
  Image,
  Modal, 
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import question from '../../images/question.png';
import close from '../../images/close.png';
import modal from '../../lottie/modal.json';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center; 
  z-index: 90;
  background-color:rgba(0, 0, 0, 0.7);
`;

const TextModal = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  border-radius: 20px;
  width: 80%;
  height: 50%; 
`;

const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Text = styled.Text`
  text-align: center;
  font-size: 15px;
  margin: 5px;
`;
const Idiot = styled.Text`
  text-align: center;
  font-size: 10px;
  color: gray;
`;

export default () => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={question} style={{height: 30, width: 30, marginRight: 10}}/>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <Page>
          <View style={styles.close}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Image source={close} style={{height: 40, width: 40,}}/>
            </TouchableOpacity>
          </View>
          <TextModal>
            <Title>Parabens</Title>
            <Text>Você acaba de baixar sua primeira dose da vacina digital contra o covid-404.</Text>
            <Text style={{color: 'red', fontWeight: 'bold'}}>#VACINAS_SALVAM_VIDAS</Text>
            <LottieView style={{height:130}} source={modal} autoPlay loop />
            <Idiot>Não seja idiota</Idiot>
          </TextModal>
        </Page>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  close: {
    width: '100%', 
    alignItems:'flex-end', 
    marginRight: 50, 
    marginBottom: -20, 
    zIndex: 1
  }
});
