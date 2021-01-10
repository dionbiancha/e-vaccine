import React from 'react';
import { Button, View } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20px;
  
`;
export default (props) => {
  return (
    <Page onLoad={setTimeout(() => {props.navigation.navigate('Home')}, 5000)}>
      <Text>Vacina salva vidas!</Text>
    </Page>
    
  );
}