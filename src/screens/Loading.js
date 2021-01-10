import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import covid from '../lottie/welcome.json';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 15px;
  color:#161B22;
  
`;

const SubTitle = styled.Text`
  font-size: 15px;
  text-align: center;
  color:#A8A8A8;
  
`;

export default (props) => {
  return (
    <Page onLoad={setTimeout(() => {props.navigation.navigate('Home')}, 2300)}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Title>Vacinas salvam vidas!</Title>
        <SubTitle>Não seja idiota</SubTitle>
      </View>
      <View style={{flex: 3}}>
        <LottieView style={{width: 600}} source={covid} autoPlay loop />
      </View>
    </Page>
    
  );
}