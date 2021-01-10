import React from 'react';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native'

import seringa from '../images/seringa.png';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const Text = styled.Text`
  flex: 1;
  margin: 50px;
  text-align: center;
  font-size: 15px;
  
`;

export default () => {
  return (
    <Page>
      <Text>Conecte o cabo no celular e na entrada USB do seu corpo</Text>
      <Image style={styles.seringa} source={seringa}/>
    </Page>
  );
}

const styles = StyleSheet.create({
  seringa: {
    width: 400,
    height: 400,
    marginBottom: -50
  }
});