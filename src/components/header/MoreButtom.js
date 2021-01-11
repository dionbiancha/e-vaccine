import React, { useState } from 'react';
import { 
  Image,
  Modal, 
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import styled from 'styled-components/native'

import question from '../../images/question.png';
import close from '../../images/close.png';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center; 
  z-index: 90;
  background-color:rgba(0, 0, 0, 0.7);
`;

const Text = styled.Text`
  text-align: center;
  font-size: 15px;
`;
const TextModal = styled.SafeAreaView`
  align-items: center;
  background-color: #FFF;
  border-radius: 20px;
  width: 80%;
  height: 50%;
  
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
            <Text>Hello World!</Text>
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
